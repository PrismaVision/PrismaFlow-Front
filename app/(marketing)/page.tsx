import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6" />
            <span className="text-xl font-bold">TaskFlow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Recursos
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Preços
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testemunhos
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Comece Já</Button>
            </Link>
          </div>
        </Container>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <Container className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Otimize seu Fluxo de Trabalho
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  O TaskFlow combina o melhor das metodologias Scrum e Kanban para ajudar sua equipe a entregar valor de forma mais rápida e eficiente.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="gap-1">
                    Começar de graça
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">
                    Ver mais
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <Container className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Principais Recursos</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tudo o que você precisa para gerenciar seus projetos
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TaskFlow provides a comprehensive set of tools to help you plan, track, and deliver your projects with
                  ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Quadros Kanban</h3>
                  <p className="text-muted-foreground">
                    Visualize seu fluxo de trabalho com quadros Kanban personalizáveis. Arraste e solte as tarefas para atualizar seu status.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Planejamento de Sprints</h3>
                  <p className="text-muted-foreground">
                    Planeje seus sprints com facilidade. Defina metas, distribua tarefas e acompanhe o progresso ao longo do sprint.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Colaboração em Equipe</h3>
                  <p className="text-muted-foreground">
                    Colabore com sua equipe em tempo real. Comente em tarefas, mencione membros da equipe e compartilhe arquivos.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <Container className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simples, preços transparentes</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escolha o melhor plano para você e seu time
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-">
                  <h3 className="text-2xl font-bold">Grátis</h3>
                  <p className="text-muted-foreground">Perfeito para times pequenos e individual</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  R$0
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/mês</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Até 3 projetos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Kanban boards Básico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Até 5 members por projeto</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link href="/register">
                    <Button className="w-full">Obter Agora</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">Perfeito para times grandes</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  R$12
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/usuário/mês</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">

                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Projetos e membros Ilimitados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Kanban boards Avançado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Plano de Sprint</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Relatórios e Insights</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link href="/register">
                    <Button className="w-full">Obter Agora</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-">
                  <h3 className="text-2xl font-bold">Empresas</h3>
                  <p className="text-muted-foreground">Para organizações</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">Sob Consulta</div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Tudo do Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>SSO e segurança avanaçada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Suporte dedicado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Integração Customizada</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Link href="/contact">
                    <Button className="w-full" variant="outline">
                      Consultar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6" />
            <span className="text-xl font-bold">TaskFlow</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TaskFlow. Todos direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Termos
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacidade
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  )
}
