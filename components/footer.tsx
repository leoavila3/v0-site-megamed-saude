import Image from "next/image"
import Link from "next/link"

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Missão", href: "#missao" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a2e44] py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="MegaMed Saude"
              width={160}
              height={44}
              className="h-10 w-auto rounded"
            />
            <p className="text-sm text-white/60 max-w-xs text-center lg:text-left">
              Gestão profissional, responsabilidade ética e excelência técnica.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Rodapé">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-center lg:text-right">
            <Link
              href="mailto:megamed2025@gmail.com"
              className="text-sm text-primary hover:underline"
            >
              megamed2025@gmail.com
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} MegaMed Saúde. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40">
            Saúde é nosso compromisso.
          </p>
        </div>
      </div>
    </footer>
  )
}
