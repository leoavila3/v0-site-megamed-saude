import Image from "next/image"
import {
  ShieldCheck,
  BarChart3,
  RefreshCw,
  UserCheck,
  LineChart,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Indicadores de Desempenho",
    description: "Monitoramento contínuo da qualidade dos serviços.",
  },
  {
    icon: ShieldCheck,
    title: "Protocolos Assistenciais",
    description: "Padronização de processos para segurança do paciente.",
  },
  {
    icon: RefreshCw,
    title: "Melhoria Contínua",
    description: "Redução de riscos e eventos adversos.",
  },
  {
    icon: UserCheck,
    title: "Integração Multiprofissional",
    description: "Equipes coordenadas e supervisionadas.",
  },
  {
    icon: LineChart,
    title: "Eficiência Operacional",
    description: "Otimização de recursos e processos.",
  },
]

export function ManagementModel() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Como atuamos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Modelo de Gestão Assistencial
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A MegaMed Saúde adota modelo de gestão baseado em indicadores de
              desempenho, protocolos assistenciais e supervisão técnica contínua.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/hospital-management.jpg"
              alt="Gestão hospitalar moderna da MegaMed"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
