import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Mission } from "@/components/mission"
import { ManagementModel } from "@/components/management-model"
import { Differentials } from "@/components/differentials"
import { Compliance } from "@/components/compliance"
import { Credentialing } from "@/components/credentialing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-40">
        <Hero />
        <About />
        <Services />
        <Mission />
        <ManagementModel />
        <Differentials />
        
        
        <Contact />
      </main>
      <Footer />
      <a
  href="https://wa.me/5521992338747?text=Olá,%20vim%20pelo%20site%20da%20MegaMed%20e%20gostaria%20de%20mais%20informações."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50"
>
  WhatsApp
</a>

    </>
  )
}

