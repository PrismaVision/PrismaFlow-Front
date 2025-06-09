import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Preços simples e transparentes</h1>
        <p className="text-muted-foreground md:text-xl">
          Escolha o plano ideal para você e sua equipe. Todos os planos incluem 14 dias de teste grátis.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Gratuito</CardTitle>
            <CardDescription>Perfeito para indivíduos e pequenas equipes</CardDescription>
            <div className="mt-4 flex items-baseline text-3xl font-bold">
              R$0
              <span className="ml-1 text-sm font-normal text-muted-foreground">/mês</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Até 3 projetos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Quadros Kanban básicos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Até 5 membros na equipe</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>1GB de armazenamento</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Suporte da comunidade</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Começar
            </Button>
          </CardFooter>
        </Card>
        <Card className="relative border-primary">
          <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Popular
          </div>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>Perfeito para equipes em crescimento</CardDescription>
            <div className="mt-4 flex items-baseline text-3xl font-bold">
              R$12
              <span className="ml-1 text-sm font-normal text-muted-foreground">/usuário/mês</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Projetos ilimitados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Quadros Kanban avançados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Planejamento de sprints</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Relatórios e análises</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>10GB de armazenamento</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Suporte prioritário por e-mail</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Começar</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>Para grandes organizações</CardDescription>
            <div className="mt-4 flex items-baseline text-3xl font-bold">Personalizado</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Tudo do Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>SSO e segurança avançada</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Suporte dedicado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Integrações personalizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Armazenamento ilimitado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>99,9% de SLA de uptime</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Falar com Vendas
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-center">Perguntas Frequentes</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Posso cancelar a qualquer momento?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sim, você pode cancelar sua assinatura a qualquer momento. Você continuará tendo acesso ao seu plano até o final do período de cobrança.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Como funciona o teste grátis?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Todos os planos pagos incluem 14 dias de teste grátis. Não é necessário cartão de crédito para começar. Você pode fazer upgrade para um plano pago a qualquer momento durante o teste.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Posso mudar de plano depois?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Se fizer upgrade, a mudança é imediata. Se fizer downgrade, a mudança ocorre ao final do período de cobrança atual.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vocês oferecem descontos?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Oferecemos descontos para organizações sem fins lucrativos e instituições de ensino. Entre em contato com nosso time de vendas para mais informações.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mx-auto max-w-3xl rounded-lg border bg-background p-8 text-center">
        <h2 className="text-2xl font-bold">Ainda tem dúvidas?</h2>
        <p className="mt-2 text-muted-foreground">
          Nossa equipe está pronta para ajudar. Entre em contato para mais informações sobre nossos planos e preços.
        </p>
        <div className="mt-6">
          <Button>Falar com Vendas</Button>
        </div>
      </div>
    </div>
  )
}
