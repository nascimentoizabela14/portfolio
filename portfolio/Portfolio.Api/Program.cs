using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Portfolio", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("Portfolio");

app.MapPost("/api/contact", async (ContactRequest request, IConfiguration configuration) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) ||
        string.IsNullOrWhiteSpace(request.Email) ||
        string.IsNullOrWhiteSpace(request.Message))
    {
        return Results.BadRequest(new
        {
            message = "Preencha todos os campos."
        });
    }

    var emailSettings = configuration
        .GetSection("EmailSettings");

    var smtpHost = emailSettings["Host"];
    var smtpPort = int.Parse(emailSettings["Port"] ?? "587");
    var smtpUser = emailSettings["Username"];
    var smtpPassword = emailSettings["Password"];
    var destinationEmail = emailSettings["DestinationEmail"];

    if (string.IsNullOrWhiteSpace(smtpHost) ||
        string.IsNullOrWhiteSpace(smtpUser) ||
        string.IsNullOrWhiteSpace(smtpPassword) ||
        string.IsNullOrWhiteSpace(destinationEmail))
    {
        return Results.Problem(
            "Configuração de e-mail não encontrada."
        );
    }

    var email = new MimeMessage();

    email.From.Add(
        new MailboxAddress(
            "Portfólio Izabela",
            smtpUser
        )
    );

    email.To.Add(
        MailboxAddress.Parse(destinationEmail)
    );

    email.Subject = $"Novo contato pelo portfólio - {request.Name}";

    email.Body = new TextPart("plain")
    {
        Text =
$"""
Novo contato recebido através do portfólio.

Nome: {request.Name}

E-mail: {request.Email}

Mensagem:
{request.Message}
"""};

    using var smtp = new SmtpClient();

    await smtp.ConnectAsync(
        smtpHost,
        smtpPort,
        SecureSocketOptions.StartTls
    );

    await smtp.AuthenticateAsync(
        smtpUser,
        smtpPassword
    );

    await smtp.SendAsync(email);

    await smtp.DisconnectAsync(true);

    return Results.Ok(new
    {
        message = "Mensagem enviada com sucesso."
    });
});

app.Run();

public record ContactRequest(
    string Name,
    string Email,
    string Message
);