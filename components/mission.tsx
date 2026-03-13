import { Target, Eye, Heart } from "lucide-react"

const cards = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Garantir assistência em saúde com qualidade técnica, segurança e eficiência por meio da gestão qualificada de equipes multiprofissionais.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência de gestão em saúde, reconhecida pela excelência técnica e confiabilidade institucional.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Ética profissional, segurança do paciente, qualidade técnica assistencial, transparência administrativa, humanização do cuidado e compromisso com resultados sustentáveis.",
  },
]

export function Mission() {
  return (
    <section id="missao" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos pilares
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Missão, Visão e Valores
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative bg-card rounded-2xl p-8 border border-border text-center group hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
