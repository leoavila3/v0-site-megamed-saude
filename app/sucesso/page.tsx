export default function Sucesso() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Mensagem enviada com sucesso!
        </h1>

        <p className="text-muted-foreground mb-6">
          Obrigado por entrar em contato com a MegaMed. Em breve retornaremos.
        </p>

        <a
          href="/"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
        >
          Voltar ao site
        </a>
      </div>
    </div>
  )
}
