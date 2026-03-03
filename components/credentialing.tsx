import { FileCheck2 } from "lucide-react"

const purposes = [
  "Processos de credenciamento hospitalar",
  "Chamamentos públicos",
  "Licitações na área da saúde",
  "Contratos de gestão e prestação de serviços assistenciais",
  "Parcerias institucionais com hospitais, clínicas e órgãos públicos",
]

export function Credentialing() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Credenciamento
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Preparados para Licitações e Credenciamentos
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A empresa atua em conformidade com os princípios da legalidade,
              impessoalidade, moralidade, publicidade e eficiência, alinhados
              às diretrizes da administração pública.
            </p>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {purposes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-5"
              >
                <FileCheck2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
