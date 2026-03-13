import Image from "next/image"
import Link from "next/link"

export default function LogoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">

      <div className="text-center">

        <Image
          src="/images/logo.jpeg"
          alt="MegaMed Saúde"
          width={1200}
          height={600}
          className="w-full max-w-4xl h-auto"
        />

        <div className="mt-8">
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
          >
            Voltar ao site
          </Link>
        </div>

      </div>

    </div>
  )
}
