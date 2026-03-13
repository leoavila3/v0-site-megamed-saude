import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-medical.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1a2e44]/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32 w-full">
        <div className="max-w-2xl">
         

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight text-balance">
            Saúde é Nosso{" "}
            <span className="text-primary">Compromisso</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-xl text-pretty">
            Gestão profissional, responsabilidade ética e excelência técnica.
            Soluções completas no gerenciamento de equipes multiprofissionais
            e organização assistencial.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-accent transition-colors"
            >
              Nossos Serviços
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Conheça a MegaMed
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
