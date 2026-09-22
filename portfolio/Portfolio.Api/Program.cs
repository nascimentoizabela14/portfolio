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

app.MapGet("/api/health", () =>
{
    return Results.Ok(new
    {
        status = "ok",
        message = "Portfolio API está funcionando."
    });
});

app.MapPost("/api/contact", async (
    ContactRequest request,
    IConfiguration configuration) =>
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

    if (!IsValidEmail(request.Email))
    {
        return Results.BadRequest(new
        {
            message = "Informe um e-mail válido."
        });
    }

    var emailSettings = configuration
        .GetSection("EmailSettings");

    var smtpHost = emailSettings["Host"];
    var smtpPortValue = emailSettings["Port"];
    var smtpUser = emailSettings["Username"];
    var smtpPassword = emailSettings["Password"];
    var destinationEmail = emailSettings["DestinationEmail"];

    if (string.IsNullOrWhiteSpace(smtpHost) ||
        string.IsNullOrWhiteSpace(smtpPortValue) ||
        string.IsNullOrWhiteSpace(smtpUser) ||
        string.IsNullOrWhiteSpace(smtpPassword) ||
        string.IsNullOrWhiteSpace(destinationEmail))
    {
        return Results.Problem(
            "Configuração de e-mail não encontrada no servidor."
        );
    }

    if (!int.TryParse(smtpPortValue, out var smtpPort))
    {
        return Results.Problem(
            "A porta SMTP configurada é inválida."
        );
    }

    try
    {
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

        email.ReplyTo.Add(
            MailboxAddress.Parse(request.Email)
        );

        email.Subject =
            $"Novo contato pelo portfólio - {request.Name}";

        email.Body = new TextPart("plain")
        {
            Text =
$"""
Novo contato recebido através do portfólio.

Nome: {request.Name}

E-mail: {request.Email}

Mensagem:
{request.Message}
"""
        };

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
    }
    catch (Exception ex)
    {
        Console.WriteLine(
            $"Erro ao enviar e-mail: {ex.Message}"
        );

        return Results.Problem(
            "Não foi possível enviar a mensagem."
        );
    }
});

app.Run();

static bool IsValidEmail(string email)
{
    try
    {
        var address = new System.Net.Mail.MailAddress(email);

        return address.Address.Equals(
            email,
            StringComparison.OrdinalIgnoreCase
        );
    }
    catch
    {
        return false;
    }
}

public record ContactRequest(
    string Name,
    string Email,
    string Message
);