import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";

import {
  SiDotnet,
  SiAngular,
  SiMysql,
  SiGit,
  SiGithub,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiBlazor,
  SiPostgresql,
  SiTypescript,
  SiReact,
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaServer,
  FaPlug,
  FaCogs,
  FaLaptopCode,
  FaHeadset,
  FaChartBar,
  FaFileCode,
  FaRobot,
  FaLayerGroup,
  FaHashtag,
  FaCss3Alt,
  FaMicrosoft,
  FaAws,
} from "react-icons/fa";
const technologyIcons: Record<
  string,
  { icon: React.ReactNode; color: string }
> = {
  "C#": {
    icon: <FaHashtag />,
    color: "text-[#9b4dca]",
  },

  ".NET": {
    icon: <SiDotnet />,
    color: "text-[#512bd4]",
  },

  "ASP.NET Core": {
    icon: <SiDotnet />,
    color: "text-[#512bd4]",
  },

  Blazor: {
    icon: <SiBlazor />,
    color: "text-[#512bd4]",
  },

  Angular: {
    icon: <SiAngular />,
    color: "text-[#dd0031]",
  },

  React: {
    icon: <SiReact />,
    color: "text-[#61dafb]",
  },

  TypeScript: {
    icon: <SiTypescript />,
    color: "text-[#3178c6]",
  },

  JavaScript: {
    icon: <SiJavascript />,
    color: "text-[#f7df1e]",
  },

  PHP: {
    icon: <SiPhp />,
    color: "text-[#777bb4]",
  },

  HTML: {
    icon: <SiHtml5 />,
    color: "text-[#e34f26]",
  },

  CSS: {
    icon: <FaCss3Alt />,
    color: "text-[#1572b6]",
  },

  Python: {
    icon: <SiPython />,
    color: "text-[#3776ab]",
  },

  MySQL: {
    icon: <SiMysql />,
    color: "text-[#4479a1]",
  },

  "SQL Server": {
    icon: <FaMicrosoft />,
    color: "text-[#cc2927]",
  },

  PostgreSQL: {
    icon: <SiPostgresql />,
    color: "text-[#4169e1]",
  },

  Git: {
    icon: <SiGit />,
    color: "text-[#f05032]",
  },

  GitHub: {
    icon: <SiGithub />,
    color: "text-foreground",
  },

  AWS: {
    icon: <FaAws />,
    color: "text-[#ff9900]",
  },

  "REST API": {
    icon: <FaPlug />,
    color: "text-emerald-500",
  },

  APIs: {
    icon: <FaPlug />,
    color: "text-emerald-500",
  },

  SQL: {
    icon: <FaDatabase />,
    color: "text-blue-500",
  },

  Firebird: {
    icon: <FaDatabase />,
    color: "text-red-500",
  },

  ERP: {
    icon: <FaServer />,
    color: "text-orange-500",
  },

  "NF-e": {
    icon: <FaFileCode />,
    color: "text-green-500",
  },

  SPED: {
    icon: <FaFileCode />,
    color: "text-blue-500",
  },

  "Power BI": {
    icon: <FaChartBar />,
    color: "text-yellow-500",
  },

  "Suporte Técnico": {
    icon: <FaHeadset />,
    color: "text-cyan-500",
  },

  "Software Engineering": {
    icon: <FaCode />,
    color: "text-primary",
  },

  Arquitetura: {
    icon: <FaLayerGroup />,
    color: "text-violet-500",
  },

  SOLID: {
    icon: <FaCogs />,
    color: "text-pink-500",
  },

  "Desenvolvimento Web": {
    icon: <FaLaptopCode />,
    color: "text-indigo-500",
  },

  Automação: {
    icon: <FaRobot />,
    color: "text-emerald-500",
  },
};
const experiences = [
  {
    company: "Consultoria & Projetos Independentes",
    role: "Consultora de Sistemas & Desenvolvedora Freelancer",
    period: "Atuação independente — Atual",
    emoji: "💼",
    description:
      "Atuação independente no desenvolvimento de soluções sob demanda, consultoria de sistemas e projetos próprios, transformando necessidades de negócio em soluções tecnológicas.",
    highlights: [
      "Desenvolvimento e manutenção de sistemas web e APIs.",
      "Desenvolvimento de soluções utilizando C#, .NET, Blazor, PHP e JavaScript/TypeScript.",
      "Integração entre sistemas e APIs de terceiros.",
      "Desenvolvimento de automações e ferramentas para processos empresariais.",
      "Modelagem e integração com bancos de dados.",
      "Análise de necessidades e proposição de soluções técnicas.",
      "Consultoria para melhoria e evolução de sistemas existentes.",
      "Desenvolvimento de projetos próprios voltados para SaaS e sistemas comerciais.",
    ],
    stack: [
      "C#",
      ".NET",
      "Blazor",
      "REST API",
      "MySQL",
      "Git",
      "JavaScript",
      "TypeScript",
    ],
  },

  {
    company: "Cosmos",
    role: "Engenheira de Software",
    period: "Julho de 2026 — Atual",
    emoji: "🚀",
    description:
      "Atuação no desenvolvimento de soluções de software, contribuindo com desenvolvimento, análise de requisitos e evolução de sistemas.",
    highlights: [
      "Desenvolvimento e evolução de soluções de software.",
      "Análise de requisitos e necessidades técnicas.",
      "Aplicação de boas práticas de desenvolvimento e arquitetura.",
      "Participação na construção e evolução de soluções orientadas ao negócio.",
    ],
    stack: [
      "Software Engineering",
      "C#",
      ".NET",
      "APIs",
      "Arquitetura",
    ],
  },

  {
    company: "BrunSker Tecnologia",
    role: "Desenvolvedora Backend",
    period: "Outubro de 2025 — Julho de 2026",
    emoji: "⚙️",
    description:
      "Atuação no desenvolvimento e manutenção de aplicações backend, APIs e integrações entre sistemas, com foco em C#/.NET e soluções orientadas às necessidades do negócio.",
    highlights: [
      "Desenvolvimento de aplicações backend utilizando C#, .NET e ASP.NET Core.",
      "Criação e manutenção de APIs REST para integração entre sistemas internos e plataformas externas.",
      "Implementação de regras de negócio e evolução de produtos.",
      "Desenvolvimento de integrações com gateways de pagamento, plataformas de comunicação e serviços externos.",
      "Modelagem e otimização de consultas SQL em bancos de dados relacionais.",
      "Aplicação de princípios SOLID e boas práticas de arquitetura de software.",
      "Versionamento de código utilizando Git e GitHub.",
      "Participação em code reviews, correções de bugs e evolução de sistemas em produção.",
    ],
    stack: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST API",
      "SQL",
      "Git",
      "GitHub",
      "SOLID",
    ],
  },

  {
    company: "APTA",
    role: "Estágio de TI e Infraestrutura",
    period: "Março de 2024 — Junho de 2025",
    emoji: "☁️",
    description:
      "Atuação em desenvolvimento de sistemas internos, manutenção de aplicações, banco de dados, documentação e infraestrutura.",
    highlights: [
      "Desenvolvimento do License Manager utilizando C#, .NET e Angular.",
      "Desenvolvimento e manutenção de sistemas internos.",
      "Implementação de melhorias e correção de bugs.",
      "Otimização e manutenção de bancos de dados.",
      "Versionamento de código com Git.",
      "Publicação de aplicações em ambiente de intranet e AWS.",
      "Elaboração de documentação técnica, casos de uso e manuais.",
      "Execução de consultas, backups e restauração de dados.",
      "Desenvolvimento de relatórios e dashboards técnicos.",
    ],
    stack: [
      "C#",
      ".NET",
      "Angular",
      "MySQL",
      "Git",
      "AWS",
      "SQL",
    ],
  },

  {
    company: "S&I Automação e Refrigeração Comercial",
    role: "Analista de Suporte de TI",
    period: "Outubro de 2023 — Fevereiro de 2024",
    emoji: "🛠️",
    description:
      "Atuação com suporte técnico, sistemas ERP e fiscais, bancos de dados e atendimento a clientes.",
    highlights: [
      "Suporte e treinamento em sistemas ERP e fiscais.",
      "Configuração de sistemas fiscais, incluindo NF-e e SPED.",
      "Atuação com bancos de dados Firebird e SQL Server.",
      "Resolução de problemas sistêmicos e fiscais.",
      "Atendimento técnico por telefone, WhatsApp e e-mail.",
      "Relacionamento e suporte direto aos clientes.",
    ],
    stack: [
      "ERP",
      "NF-e",
      "SPED",
      "Firebird",
      "SQL Server",
      "Suporte Técnico",
    ],
  },

  {
    company: "Experiência em Desenvolvimento Web",
    role: "Estágio de TI",
    period: "Junho de 2023 — Dezembro de 2023",
    emoji: "💻",
    description:
      "Experiência com desenvolvimento web, bancos de dados, APIs, dashboards e automação de processos.",
    highlights: [
      "Desenvolvimento de aplicações web responsivas.",
      "Desenvolvimento utilizando PHP, HTML, CSS e JavaScript.",
      "Modelagem, administração e otimização de bancos MySQL.",
      "Integração de sistemas e consumo de APIs REST.",
      "Desenvolvimento de dashboards e relatórios no Power BI.",
      "Automação de processos utilizando Python.",
      "Instalação, configuração e manutenção de softwares e ambientes de desenvolvimento.",
    ],
    stack: [
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
      "C#",
      "Power BI",
      "Python",
    ],
  },
];

export default function Experience() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">

          {/* Header */}
          <div className="max-w-3xl mb-14 opacity-0 animate-fade-in-up">
            <span className="font-mono text-sm text-primary">
              {"// trajetória profissional"}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Experiência
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              Minha trajetória em tecnologia combina desenvolvimento backend,
              APIs, integrações, bancos de dados, arquitetura de software,
              consultoria e desenvolvimento de soluções voltadas para
              necessidades reais de negócio.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Experiência profissional" />
          </div>

          {/* Timeline */}
          <div className="relative mt-12">

            {/* Linha */}
            <div className="absolute left-[7px] md:left-[15px] top-2 bottom-0 w-px bg-border" />

            <div className="space-y-12">

              {experiences.map((experience, index) => (

                <article
                  key={`${experience.company}-${experience.role}`}
                  className={`relative pl-8 md:pl-12 opacity-0 animate-fade-in-up stagger-${Math.min(
                    index + 2,
                    4
                  )}`}
                >

                  {/* Ponto da timeline */}
                  <div className="absolute left-0 md:left-[8px] top-2 w-[15px] h-[15px] rounded-full bg-primary border-4 border-background ring-1 ring-primary/30 animate-pulse" />

                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover-lift transition-all duration-300 hover:border-primary/40 hover:shadow-lg">

                    {/* Empresa / Cargo */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">

                      <div>

                        <div className="flex items-center gap-2">

                          <span className="text-xl">
                            {experience.emoji}
                          </span>

                          <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            {experience.role}
                          </h2>

                        </div>

                        <p className="text-primary font-medium mt-1 ml-7">
                          {experience.company}
                        </p>

                      </div>

                      <span className="font-mono text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                        {experience.period}
                      </span>

                    </div>

                    {/* Descrição */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Atividades */}
                    <div className="mb-6">

                      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span>📌</span>
                        Principais atividades
                      </h3>

                      <ul className="space-y-2">

                        {experience.highlights.map((highlight) => (

                          <li
                            key={highlight}
                            className="flex gap-3 text-sm text-muted-foreground leading-relaxed group"
                          >

                            <span className="text-primary font-mono mt-0.5 transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>

                            <span className="group-hover:text-foreground transition-colors duration-300">
                              {highlight}
                            </span>

                          </li>

                        ))}

                      </ul>

                    </div>

                    {/* Stack */}
                    <div>

                      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span>🧰</span>
                        Tecnologias
                      </h3>

                      <div className="flex flex-wrap gap-2">

                        {experience.stack.map((technology) => {

                          const technologyInfo =
                            technologyIcons[technology];

                          return (
                            <span
                              key={technology}
                              className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                px-3
                                py-1.5
                                rounded-lg
                                bg-secondary
                                text-secondary-foreground
                                text-xs
                                font-mono
                                border
                                border-transparent
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:scale-105
                                hover:border-primary/30
                                hover:shadow-md
                                cursor-default
                              "
                            >

                              {technologyInfo ? (
                                <span
                                  className={`
                                    text-base
                                    ${technologyInfo.color}
                                    transition-transform
                                    duration-300
                                    group-hover:rotate-6
                                    group-hover:scale-125
                                  `}
                                >
                                  {technologyInfo.icon}
                                </span>
                              ) : (
                                <FaCode className="text-primary" />
                              )}

                              <span>
                                {technology}
                              </span>

                            </span>
                          );

                        })}

                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}