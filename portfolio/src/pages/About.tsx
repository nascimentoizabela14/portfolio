import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import perfil from "@/assets/perfil-new.jpg"

const skills = [
  "Desenvolvimento Backend",
  "APIs REST",
  "Integrações entre sistemas",
  "Arquitetura de Software",
  "Microsserviços",
  "Mensageria",
];

const stack = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Blazor",
  "Angular",
  "React",
  "TypeScript",
  "SQL",
  "MySQL",
  "Oracle",
  "RabbitMQ",
  "Docker",
  "AWS",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <span className="font-mono text-sm text-primary">
              {"// sobre mim"}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Desenvolvedora Backend .NET
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">

              {/* Developer Photo */}
              <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-primary/30 transition-all duration-300 hover:border-primary">
                  <img
                    src={perfil}
                    alt="Izabela Apolinário - Desenvolvedora Backend .NET"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Introduction */}
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  Sou{" "}
                  <span className="text-primary font-medium">
                    Izabela Apolinário
                  </span>
                  , desenvolvedora de software com foco em{" "}
                  <span className="text-primary font-medium">
                    C#, .NET, APIs, integrações e arquitetura de software
                  </span>
                  .
                </p>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  Ao longo da minha trajetória em tecnologia, venho trabalhando
                  com desenvolvimento e manutenção de sistemas, construção de
                  APIs, integrações com serviços externos e soluções backend.
                  Também tive contato com diferentes bancos de dados,
                  mensageria, Docker e serviços de cloud.
                </p>
              </div>

              {/* Engineering */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  Gosto especialmente de problemas que envolvem{" "}
                  <span className="text-foreground">
                    comunicação entre sistemas, regras de negócio e
                    arquitetura
                  </span>
                  . Busco escrever código organizado e sustentável, utilizando
                  conceitos como SOLID, Design Patterns e Clean Architecture
                  quando fazem sentido para o contexto da solução.
                </p>
              </div>

              {/* Current Focus */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground leading-relaxed">
                  Atualmente, meu foco profissional está em oportunidades de
                  desenvolvimento{" "}
                  <span className="text-foreground">
                    Backend .NET e Full Stack
                  </span>
                  , continuando a evoluir principalmente em arquitetura,
                  integrações, cloud e desenvolvimento de produtos.
                </p>
              </div>

              {/* Philosophy */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Como eu trabalho" />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span>{" "}
                  Entender o problema antes de escrever código
                </p>

                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span>{" "}
                  Priorizar código simples, organizado e sustentável
                </p>

                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span>{" "}
                  Pensar em integrações e evolução desde o início
                </p>

                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span>{" "}
                  Continuar aprendendo e transformar conhecimento em projetos
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Skills */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span>{" "}
                  Especialidades{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>

                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span>{" "}
                  Tecnologias{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>

                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span>{" "}
                  Trajetória{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="text-foreground">~3 anos</span>{" "}
                    de experiência em tecnologia
                  </p>

                  <p>
                    Experiência com desenvolvimento backend e integrações
                  </p>

                  <p>
                    Formação em Análise e Desenvolvimento de Sistemas
                  </p>

                  <p>
                    Ciência da Computação em andamento
                  </p>
                </div>
              </div>

              {/* Focus */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span>{" "}
                  Foco atual{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>→ Backend .NET</p>
                  <p>→ Arquitetura de software</p>
                  <p>→ APIs e integrações</p>
                  <p>→ Cloud & AWS</p>
                  <p>→ Microsserviços</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}