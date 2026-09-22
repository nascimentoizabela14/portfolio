using System.Net.Mail;
using System.Text;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);


// ========================================
// CORS
// ========================================

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


// ========================================
// HTTP CLIENT - RESEND
// ========================================

builder.Services.AddHttpClient("Resend", client =>
{
    client.BaseAddress =
        new Uri("https://api.resend.com/");

    client.Timeout =
        TimeSpan.FromSeconds(15);
});


var app = builder.Build();


// ========================================
// MIDDLEWARE
// ========================================

app.UseCors("Portfolio");


// ========================================
// HEALTH CHECK
// ========================================

app.MapGet("/api/health", () =>
{
    return Results.Ok(new
    {
        status = "ok",
        message = "Portfolio API está funcionando."
    });
});


// ========================================
// CONTACT
// ========================================

app.MapPost("/api/contact", async (
    ContactRequest request,
    IConfiguration configuration,
    IHttpClientFactory httpClientFactory) =>
{
    // ====================================
    // VALIDATION
    // ====================================

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


    // ====================================
    // CONFIGURATION
    // ====================================

    var resendApiKey =
        configuration["Resend:ApiKey"];

    var destinationEmail =
      "apolinario.izabela@gmail.com";

    var fromEmail =
       "onboarding@resend.dev";


    if (string.IsNullOrWhiteSpace(resendApiKey))
    {
        return Results.Problem(
            "Serviço de e-mail não configurado."
        );
    }


    if (string.IsNullOrWhiteSpace(destinationEmail))
    {
        return Results.Problem(
            "E-mail de destino não configurado."
        );
    }


    if (string.IsNullOrWhiteSpace(fromEmail))
    {
        return Results.Problem(
            "E-mail remetente não configurado."
        );
    }


    // ====================================
    // EMAIL
    // ====================================

    var subject =
        $"Novo contato pelo portfólio - {request.Name}";


    var html = $"""
    <!DOCTYPE html>

    <html lang="pt-BR">

    <head>

        <meta charset="UTF-8">

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        >

        <title>Novo contato</title>

    </head>


    <body style="
        margin: 0;
        padding: 0;
        background: #f4f4f5;
        font-family: Arial, Helvetica, sans-serif;
    ">


        <div style="
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,.08);
        ">


            <!-- HEADER -->

            <div style="
                background: #18181b;
                padding: 30px;
                text-align: center;
            ">

                <h1 style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 24px;
                ">
                    Novo contato
                </h1>


                <p style="
                    margin: 10px 0 0;
                    color: #a1a1aa;
                    font-size: 14px;
                ">
                    Mensagem recebida através do portfólio
                </p>

            </div>


            <!-- CONTENT -->

            <div style="padding: 30px;">


                <!-- NAME -->

                <div style="margin-bottom: 24px;">

                    <p style="
                        margin: 0 0 6px;
                        color: #71717a;
                        font-size: 13px;
                    ">
                        Nome
                    </p>


                    <p style="
                        margin: 0;
                        color: #18181b;
                        font-size: 16px;
                        font-weight: bold;
                    ">
                        {HtmlEncode(request.Name)}
                    </p>

                </div>


                <!-- EMAIL -->

                <div style="margin-bottom: 24px;">

                    <p style="
                        margin: 0 0 6px;
                        color: #71717a;
                        font-size: 13px;
                    ">
                        E-mail
                    </p>


                    <p style="
                        margin: 0;
                        color: #18181b;
                        font-size: 16px;
                    ">
                        {HtmlEncode(request.Email)}
                    </p>

                </div>


                <!-- MESSAGE -->

                <div>

                    <p style="
                        margin: 0 0 6px;
                        color: #71717a;
                        font-size: 13px;
                    ">
                        Mensagem
                    </p>


                    <div style="
                        padding: 16px;
                        background: #f4f4f5;
                        border-radius: 8px;
                        color: #27272a;
                        font-size: 15px;
                        line-height: 1.6;
                        white-space: pre-wrap;
                    ">
                        {HtmlEncode(request.Message)}
                    </div>

                </div>


            </div>


            <!-- FOOTER -->

            <div style="
                padding: 20px 30px;
                background: #fafafa;
                border-top: 1px solid #e4e4e7;
            ">

                <p style="
                    margin: 0;
                    color: #71717a;
                    font-size: 12px;
                    text-align: center;
                ">
                    Mensagem enviada automaticamente pelo portfólio de Izabela.
                </p>

            </div>


        </div>

    </body>

    </html>
    """;


    // ====================================
    // RESEND REQUEST
    // ====================================

    var payload = new
    {
        from = fromEmail,

        to = new[]
        {
            destinationEmail
        },

        reply_to = new[]
        {
            request.Email
        },

        subject,

        html
    };


    try
    {
        var httpClient =
            httpClientFactory.CreateClient("Resend");


        httpClient.DefaultRequestHeaders.Authorization =
            new System.Net.Http.Headers.AuthenticationHeaderValue(
                "Bearer",
                resendApiKey
            );


        var json =
            JsonSerializer.Serialize(payload);


        using var content =
            new StringContent(
                json,
                Encoding.UTF8,
                "application/json"
            );


        var response =
            await httpClient.PostAsync(
                "emails",
                content
            );


        var responseBody =
            await response.Content.ReadAsStringAsync();


        // =================================
        // ERROR
        // =================================

        if (!response.IsSuccessStatusCode)
        {
            Console.WriteLine(
                $"Resend error: {response.StatusCode}"
            );

            Console.WriteLine(
                responseBody
            );


            return Results.Problem(
                "Não foi possível enviar a mensagem."
            );
        }


        // =================================
        // SUCCESS
        // =================================

        Console.WriteLine(
            $"E-mail enviado com sucesso: {responseBody}"
        );


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


// ========================================
// HELPERS
// ========================================

static bool IsValidEmail(string email)
{
    try
    {
        var address =
            new MailAddress(email);


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


static string HtmlEncode(string value)
{
    return System.Net.WebUtility.HtmlEncode(value);
}


// ========================================
// REQUEST
// ========================================

public record ContactRequest(
    string Name,
    string Email,
    string Message
);