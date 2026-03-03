import { CheckCircle } from "lucide-react"

const regulations = [
  "Normativas do Ministério da Saúde",
  "Diretrizes da ANVISA",
  "Conselhos profissionais competentes",
  "Protocolos baseados em evidências científicas",
]

const controls = [
  "Auditoria interna assistencial",
  "Monitoramento de indicadores",
  "Avaliação contínua de processos",
  "Gestão de riscos assistenciais",
]

export function Compliance() {
  return (
    <section className="py-20 lg:py-28 bg-[#1a2e44]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Conformidade
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Conformidade Regulatória e Qualidade
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Atuamos em total conformidade com os principais órgãos reguladores da saúde.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">
              Conformidade Regulatória
            </h3>
            <ul className="space-y-4">
              {regulations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">
              Controle de Qualidade
            </h3>
            <ul className="space-y-4">
              {controls.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
