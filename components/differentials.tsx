import {
  Award,
  Building,
  Zap,
  BarChart,
  ShieldCheck,
  FileText,
} from "lucide-react"

const differentials = [
  {
    icon: Award,
    title: "Profissionais Experientes",
    description: "Gestão técnica liderada por profissionais de alta capacidade.",
  },
  
  {
    icon: Zap,
    title: "Mobilização Rápida",
    description: "Rapidez na mobilização e implantação de equipes assistenciais.",
  },
  {
    icon: BarChart,
    title: "Eficiência Operacional",
    description: "Foco em eficiência operacional e qualidade assistencial.",
  },
  {
    icon: ShieldCheck,
    title: "Ética e Transparência",
    description: "Atuação ética, transparente e em conformidade regulatória.",
  },
  {
    icon: FileText,
    title: "Protocolos e Indicadores",
    description: "Modelo assistencial baseado em protocolos e indicadores de desempenho.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Por que nos escolher
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Diferenciais Competitivos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conheça o que diferencia a MegaMed Saúde no mercado de gestão assistencial.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
