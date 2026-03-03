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
      <main>
        <Hero />
        <About />
        <Services />
        <Mission />
        <ManagementModel />
        <Differentials />
        <Compliance />
        <Credentialing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
