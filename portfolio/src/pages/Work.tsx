import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "Microserviço de Consulta e Validação de CNPJ",
    description:
      "Microserviço desenvolvido para consulta e atualização de dados cadastrais de empresas, utilizando a API da CNPJá. A solução permite verificar CNPJs e inscrições estaduais, identificando situações cadastrais ativas e mantendo as informações atualizadas para consumo por outros sistemas.",
    stack: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST API",
      "CNPJá",
      "MySQL",
      "Microserviços",
    ],
    impact:
      "Automação da consulta e atualização de dados cadastrais, reduzindo processos manuais e disponibilizando as informações para outros sistemas.",
  },

  {
    name: "Balancete Fiscal",
    description:
      "Sistema desenvolvido em Blazor para consulta, organização e geração de informações fiscais e financeiras. A aplicação permite trabalhar com dados estruturados, gerar planilhas e persistir informações em banco de dados MySQL.",
    stack: [
      "C#",
      ".NET",
      "Blazor",
      "MySQL",
      "Dapper",
      "SQL",
      "Excel",
    ],
    impact:
      "Transformação de dados fiscais e financeiros em informações organizadas para análise e utilização operacional.",
  },

  {
    name: "ZapRelaciona",
    description:
      "SaaS desenvolvido para relacionamento com clientes através do WhatsApp. A aplicação possui estrutura para gerenciamento de clientes, campanhas, templates e contatos, com arquitetura preparada para integração com a API oficial da Meta.",
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
    name: "SaaS Comercial",
    description:
      "Sistema comercial em desenvolvimento para gestão de vendas e operações de negócio, com controle de caixa, entradas e saídas, clientes, fornecedores, produtos e geração de relatórios. O projeto também contempla análises estratégicas para identificar produtos de maior giro e informações relevantes para a operação.",
    stack: [
      "C#",
      ".NET",
      "Blazor",
      "MySQL",
      "REST API",
      "Relatórios",
      "Dashboard",
    ],
    impact:
      "Construção de uma solução comercial integrada, com foco em gestão operacional e geração de informações para tomada de decisão.",
  },

  {
    name: "Integrações de Pagamentos",
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
      "Integração de processos de pagamento e comunicação entre diferentes sistemas e serviços.",
  },

  {
  name: "Sistema Web em PHP",
  description:
    "Desenvolvimento de uma aplicação web completa em PHP, composta por múltiplos formulários, funcionalidades de cadastro e gerenciamento de informações, com integração a banco de dados.",
  stack: [
    "PHP",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS",
    "Banco de Dados",
  ],
  impact:
    "Desenvolvimento de uma solução web completa para centralização e organização de informações e processos.",
},
  {
    name: "Gerenciador de Licenças",
    description:
      "Sistema para gerenciamento e validação de licenças de software. A aplicação verifica a validade da licença no ambiente Windows, permite seu cadastro e apresenta na aplicação o status da licença. Também possui gerenciamento de colaboradores, clientes e unidades de negócio.",
    stack: [
      "C#",
      ".NET",
      "Windows",
      "Licenciamento",
      "MySQL",
      "Validação",
      "Gestão",
    ],
    impact:
      "Controle centralizado de licenças e informações relacionadas a clientes, colaboradores e unidades de negócio.",
  },

  {
    name: "Sistema para Auto Center",
    description:
      "Sistema comercial em evolução para um Auto Center, com foco em gestão da operação, caixa, clientes, produtos, serviços e relatórios. O projeto está sendo modernizado e possui novas funcionalidades planejadas para acompanhar o crescimento do negócio.",
    stack: [
      "C#",
      ".NET",
      "Blazor",
      "MySQL",
      "REST API",
      "Dashboard",
      "Relatórios",
    ],
    impact:
      "Aplicação de tecnologia para estruturar processos de um negócio real e evoluir a gestão operacional.",
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
              Uma seleção de projetos pessoais e profissionais envolvendo
              desenvolvimento backend, APIs, integrações, sistemas comerciais,
              automações e arquitetura de software. Meu foco está em
              transformar necessidades reais de negócio em soluções
              organizadas, funcionais e preparadas para evoluir.
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