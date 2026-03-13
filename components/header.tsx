"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Missão", href: "#missao" },
  { label: "Diferenciais", href: "#diferenciais" },
  
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-5 lg:px-12">
        <Link href="/logo" className="flex items-center gap-3">

          <Image
  src="/images/logo.jpeg"
  alt="MegaMed Saude"
  width={1200}
  height={800}
  className="h-24 w-auto -my-4 transition-transform duration-300 hover:scale-110"
  priority
/>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent transition-colors"
          >
            Fale Conosco
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contato"
              className="mt-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center hover:bg-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Fale Conosco
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
