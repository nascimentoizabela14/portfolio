import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    href: "https://github.com/izabelaapolinario",
    icon: Github,
    label: "GitHub",
    handle: "github.com/izabelaapolinario",
  },
  {
    href: "https://www.linkedin.com/in/izabela-apolinario",
    icon: Linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/izabela-apolinario",
  },
  {
    href: "mailto:apolinario.izabela@gmail.com",
    icon: Mail,
    label: "Email",
    handle: "apolinario.izabela@gmail.com",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao enviar mensagem.");
    }

    toast({
      title: "Mensagem enviada!",
      description:
        "Obrigada pelo contato. Responderei assim que possível.",
    });

    form.reset();
  } catch (error) {
    console.error(error);

    toast({
      title: "Não foi possível enviar",
      description:
        "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <span className="font-mono text-sm text-primary">
              {"// vamos conversar"}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Entre em contato
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              Estou aberta a novas oportunidades profissionais, projetos e
              conversas sobre tecnologia. Se quiser falar sobre uma vaga,
              projeto ou oportunidade de colaboração, entre em contato.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in-up stagger-1">
              <CodeDivider label="Enviar mensagem" />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="font-mono text-sm"
                  >
                    <span className="text-primary">//</span> Nome
                  </Label>

                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-mono text-sm"
                  >
                    <span className="text-primary">//</span> Email
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-mono text-sm"
                  >
                    <span className="text-primary">//</span> Mensagem
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte um pouco sobre a oportunidade ou projeto..."
                    rows={6}
                    required
                    className="bg-card border-border font-mono text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-mono"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <CodeDivider label="Onde me encontrar" />

              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  const isEmail = link.href.startsWith("mailto:");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={
                        isEmail
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      <div>
                        <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </p>

                        <p className="font-mono text-xs text-muted-foreground break-all">
                          {link.handle}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-8 p-5 bg-card border border-border rounded-lg">
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-primary">/*</span>{" "}
                  Disponibilidade{" "}
                  <span className="text-primary">*/</span>
                </p>

                <p className="text-sm text-foreground leading-relaxed">
                  Atualmente estou aberta a novas oportunidades em
                  desenvolvimento Backend .NET e Full Stack, além de
                  projetos relacionados a APIs, integrações e software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}