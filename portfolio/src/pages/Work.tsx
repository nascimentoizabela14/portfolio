import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "ZapRelaciona",
    slug: "zaprelaciona",
    description:
      "SaaS desenvolvido para relacionamento com clientes através do WhatsApp. A aplicação permite gerenciar clientes, campanhas, templates e contatos, com integração planejada com a API oficial da Meta para envio de mensagens.",
    stack: [
      "C#",
      ".NET 8",
      "Blazor",
      "MySQL",
      "Dapper",
      "WhatsApp API",
    ],
    impact:
      "Projeto próprio desenvolvido para transformar uma necessidade de negócio em uma solução SaaS.",
  },
  {
    name: "Integrações de Pagamentos",
    slug: "integracoes-pagamentos",
    description:
      "Desenvolvimento de integrações backend para operações financeiras, incluindo geração de PIX, comunicação com APIs externas e validação de cobranças realizadas por cartão.",
    stack: [
      "C#",
      ".NET",
      "REST APIs",
      "PIX",
      "Banco do Brasil",
      "Cielo",
    ],
    impact:
      "Integração de processos de pagamento e comunicação entre sistemas.",
  },
  {
    name: "Integrações com WhatsApp",
    slug: "integracoes-whatsapp",
    description:
      "Desenvolvimento de integrações para comunicação com clientes através do WhatsApp Business, utilizando serviços de terceiros e recursos da plataforma oficial da Meta.",
    stack: [
      "C#",
      ".NET",
      "WhatsApp Business",
      "Meta API",
      "Z-API",
      "Webhooks",
    ],
    impact:
      "Automação da comunicação entre sistemas e canais de atendimento.",
  },
  {
    name: "APIs e Microsserviços",
    slug: "apis-microsservicos",
    description:
      "Desenvolvimento e manutenção de soluções backend utilizando APIs REST, separação de responsabilidades, princípios de arquitetura de software e comunicação entre serviços.",
    stack: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST APIs",
      "RabbitMQ",
      "Docker",
    ],
    impact:
      "Soluções backend organizadas, desacopladas e preparadas para evolução.",
  },
];

export default function Work() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <span className="font-mono text-sm text-primary">
              {"// projetos & experiências"}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Projetos
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              Uma seleção de projetos pessoais e experiências técnicas em
              desenvolvimento backend, APIs, integrações e arquitetura de
              software. Meu foco está em transformar necessidades de negócio
              em soluções organizadas, funcionais e preparadas para evoluir.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projetos em destaque" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(
                  index + 2,
                  4
                )}`}
              >
                <ProjectCard
                  {...project}
                  className="hover-lift"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}