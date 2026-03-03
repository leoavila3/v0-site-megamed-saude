import {
  Users,
  Stethoscope,
  ClipboardList,
  FileCheck,
  Building2,
  HeartPulse,
  CalendarClock,
} from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Gerenciamento de Equipes",
    description:
      "Coordenação de equipes multiprofissionais com dimensionamento e alocação de profissionais.",
  },
  {
    icon: Stethoscope,
    title: "Serviços Assistenciais",
    description:
      "Prestação de serviços médicos e assistenciais especializados em diversas áreas.",
  },
  {
    icon: ClipboardList,
    title: "Fluxos Operacionais",
    description:
      "Organização de fluxos assistenciais e operacionais para máxima eficiência.",
  },
  {
    icon: FileCheck,
    title: "Protocolos Clínicos",
    description:
      "Implantação e acompanhamento de protocolos clínicos baseados em evidências.",
  },
  {
    icon: Building2,
    title: "Gestão Hospitalar",
    description:
      "Apoio técnico à gestão hospitalar e ambulatorial com foco em resultados.",
  },
  {
    icon: HeartPulse,
    title: "Urgência e Emergência",
    description:
      "Cobertura assistencial em unidades de urgência, emergência e enfermarias.",
  },
  {
    icon: CalendarClock,
    title: "Planejamento de RH",
    description:
      "Planejamento e dimensionamento de recursos humanos em saúde.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos serviços
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluções completas em gestão de saúde
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Oferecemos serviços voltados ao suporte assistencial e à gestão
            técnica de serviços de saúde com excelência.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
