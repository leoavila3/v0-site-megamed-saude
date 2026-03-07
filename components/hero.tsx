import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#1a2e44]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-medical.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-06%20at%2022.12.15-Rnd2NvK4F7iCU7zPw5C402PNYExBSb.jpeg"
                alt="MegaMed - Saúde é Nosso Compromisso"
                width={450}
                height={150}
                className="object-contain bg-white rounded-xl p-4 shadow-2xl"
                priority
              />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight text-balance">
              Excelência em{" "}
              <span className="text-primary">Gestão de Saúde</span>
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
      </div>
    </section>
  )
}
