import { Mail, MapPin, Building2, Briefcase } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contato
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Entre em contato com a MegaMed
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A MegaMed Saúde reafirma seu compromisso com a prestação de
              serviços de saúde pautados na responsabilidade ética, excelência
              técnica e segurança do paciente.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Empresa</h3>
                  <p className="text-sm text-muted-foreground">MEGAMED SAÚDE</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Área de Atuação</h3>
                  <p className="text-sm text-muted-foreground">
                    Consultoria, Gestão e prestação de serviços assistenciais em saúde
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">E-mail</h3>
                  <Link
                    href="mailto:megamed2025@gmail.com"
                    className="text-sm text-primary hover:underline"
                  >
                    megamed2025@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Envie sua mensagem
            </h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                  Assunto
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Assunto da mensagem"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Descreva o que precisa..."
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-accent transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
