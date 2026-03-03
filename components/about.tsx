import Image from "next/image"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Boas práticas clínicas e conformidade regulatória",
  "Eficiência administrativa e segurança assistencial",
  "Otimização dos recursos institucionais",
  "Atendimento a demandas públicas e privadas",
]

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/team-medical.jpg"
                alt="Equipe multiprofissional da MegaMed Saude"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl hidden lg:block">
              <p className="text-3xl font-bold">+100</p>
              <p className="text-sm font-medium text-primary-foreground/80">Profissionais Qualificados</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quem somos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Apresentação Institucional
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A MegaMed Saúde é uma empresa especializada na gestão e
              operacionalização de serviços em saúde, atuando com elevado
              padrão técnico, responsabilidade ética e compromisso com a
              qualidade assistencial.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Estruturada para atender demandas públicas e privadas, a empresa
              oferece soluções completas no gerenciamento de equipes
              multiprofissionais, organização assistencial e suporte
              técnico-operacional em unidades de saúde.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
