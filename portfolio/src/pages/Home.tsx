import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    name: "ZapRelaciona",
    slug: "zaprelaciona",
    description:
      "SaaS desenvolvido para relacionamento com clientes através do WhatsApp, com gerenciamento de clientes, campanhas, templates e integração com a API oficial da Meta.",
    stack: ["C#", ".NET 8", "Blazor", "MySQL", "Dapper", "WhatsApp API"],
    impact:
      "Automação de relacionamento e comunicação com clientes",
  },
  {
    name: "Integrações de Pagamentos",
    slug: "integracoes-de-pagamentos",
    description:
      "Desenvolvimento de integrações para operações financeiras, incluindo geração de PIX, comunicação com APIs externas e validação de cobranças.",
    stack: ["C#", ".NET", "REST API", "PIX", "Banco do Brasil", "Cielo"],
    impact:
      "Integração de processos financeiros entre sistemas",
  },
  {
    name: "APIs & Integrações",
    slug: "apis-e-integracoes",
    description:
      "Desenvolvimento e manutenção de APIs REST e integrações entre sistemas, serviços externos e diferentes fontes de dados.",
    stack: ["C#", ".NET", "ASP.NET Core", "REST", "Webhooks", "SQL"],
    impact:
      "Comunicação confiável entre diferentes sistemas e serviços",
  },
  {
    name: "Arquitetura & Microsserviços",
    slug: "arquitetura-e-microsservicos",
    description:
      "Desenvolvimento de soluções backend utilizando princípios de arquitetura de software, separação de responsabilidades, mensageria e serviços independentes.",
    stack: ["C#", ".NET", "RabbitMQ", "Docker", "APIs", "Microservices"],
    impact:
      "Soluções mais organizadas, desacopladas e preparadas para evolução",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="max-w-4xl opacity-0 animate-fade-in-up">
            {/* Code-style label */}
            <CodeLabel className="mb-6">
              Backend .NET Developer
            </CodeLabel>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Olá, eu sou{" "}
              <span className="text-primary">Izabela Apolinário.</span>
              <br />
              <span className="text-muted-foreground">
                Desenvolvo sistemas, APIs e integrações
              </span>
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              Desenvolvedora de software com foco em{" "}
              <span className="text-foreground">
                C#, .NET, APIs REST, integrações e arquitetura de software
              </span>
              . Gosto de transformar problemas de negócio em soluções
              eficientes, organizadas e preparadas para evoluir.
            </p>

            {/* Tech focus */}
            <div className="flex flex-wrap gap-2 mb-10 opacity-0 animate-fade-in-up stagger-2">
              {[
                "C#",
                ".NET",
                "ASP.NET Core",
                "REST APIs",
                "Microservices",
                "RabbitMQ",
                "SQL",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md border border-border bg-card font-mono text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up stagger-3">
              <Button
                asChild
                size="lg"
                className="font-mono transition-transform hover:scale-105"
              >
                <Link to="/work">
                  Ver projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-mono transition-transform hover:scale-105"
              >
                <Link to="/contact">
                  Entrar em contato
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Projetos em destaque" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(
                  index + 1,
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

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link
              to="/work"
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <span className="text-primary mr-2">{"//"}</span>
              Ver todos os projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <CodeDivider label="Especialidades" />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors">
              <h3 className="font-mono text-primary text-sm mb-3">
                // Backend
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Desenvolvimento de aplicações backend com C#, .NET e
                ASP.NET Core, com foco em código organizado, manutenção e
                evolução dos sistemas.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors">
              <h3 className="font-mono text-primary text-sm mb-3">
                // APIs & Integrações
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                APIs REST, webhooks, integrações com serviços externos,
                pagamentos, WhatsApp e comunicação entre diferentes
                sistemas.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors">
              <h3 className="font-mono text-primary text-sm mb-3">
                // Arquitetura
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Aplicação de princípios como SOLID, Design Patterns,
                Clean Architecture, microsserviços e mensageria para
                construir soluções mais sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
