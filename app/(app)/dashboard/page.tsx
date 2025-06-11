import Link from "next/link"
import { BarChart3, CalendarDays, CheckCircle2, Clock, LineChart, LucideCalendar, Plus, Star, Trello, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardCalendar } from "@/components/dashboard/calendar/dashbaord-calendar"

export default function DashboardPage() {

  const upcomingTasks = [
    {
      id: "1",
      title: "Criar mockup da homepage",
      project: "Redesign do Site",
      dueDate: "Amanhã",
      priority: "high",
    },
    {
      id: "2",
      title: "Integração de API para autenticação",
      project: "Desenvolvimento de App Mobile",
      dueDate: "Em 2 dias",
      priority: "medium",
    },
    {
      id: "3",
      title: "Criar calendário de conteúdo",
      project: "Campanha de Marketing",
      dueDate: "Próxima semana",
      priority: "low",
    },
    {
      id: "4",
      title: "Revisar componentes do design system",
      project: "Redesign do Site",
      dueDate: "Hoje",
      priority: "high",
    },
  ]

  const teamMembers = [
    {
      id: "1",
      name: "João Silva",
      role: "Product Manager",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    {
      id: "2",
      name: "Maria Souza",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MS",
    },
    {
      id: "3",
      name: "Carlos Pereira",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "CP",
    },
    {
      id: "4",
      name: "Ana Oliveira",
      role: "Backend Developer",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AO",
    },
  ]

  const upcomingEvents = [
    { id: "1", title: "Planejamento de Sprint", date: "Hoje, 14:00", project: "Redesign do Site" },
    { id: "2", title: "Revisão de Design", date: "Amanhã, 10:00", project: "Desenvolvimento de App Mobile" },
    { id: "3", title: "Retrospectiva da Equipe", date: "Sexta, 15:30", project: "Todos os Projetos" },
    { id: "4", title: "Reunião com Cliente", date: "Próxima segunda, 11:00", project: "Campanha de Marketing" },
  ]

  const activeSprints = [
    { id: "1", name: "Sprint 3", project: "Redesign do Site", progress: 75, endDate: "15 de Out" },
    { id: "2", name: "Sprint 2", project: "Desenvolvimento de App Mobile", progress: 40, endDate: "20 de Out" },
  ]

  return (
    <div className="py-6 space-y-8">

      <Card>
        <CardHeader>
          <CardTitle>
            Calendário
          </CardTitle>
          <CardDescription>
            Visualize seus eventos e prazos importantes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DashboardCalendar />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sprints Ativos</CardTitle>
          <CardDescription>Sprints em andamento nos seus projetos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeSprints.map((sprint) => (
              <div
                key={sprint.id}
                className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Trello className="h-4 w-4 text-primary" />
                    <p className="font-medium">{sprint.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Projeto: {sprint.project}</p>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-sm font-medium">{sprint.progress}% Concluído</div>
                  <div className="text-xs text-muted-foreground">Termina em {sprint.endDate}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Análises dos Projetos */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Tarefas</CardTitle>
            <CardDescription>Tarefas por status em todos os projetos</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
              <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
              <p className="mt-2 text-sm text-muted-foreground">Gráfico de distribuição de tarefas</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tendências de Produtividade</CardTitle>
            <CardDescription>Conclusão de tarefas ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
              <LineChart className="h-16 w-16 text-muted-foreground/50" />
              <p className="mt-2 text-sm text-muted-foreground">Gráfico de produtividade</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Minhas Tarefas</CardTitle>
          <CardDescription>Tarefas atribuídas a você em todos os projetos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${task.priority === "high"
                        ? "bg-red-500"
                        : task.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                        }`}
                    />
                    <p className="font-medium">{task.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Projeto: {task.project}</p>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  <span>{task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Ver Todas as Tarefas
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Prioridades das Tarefas</CardTitle>
            <CardDescription>Divisão das suas tarefas por prioridade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span>Alta Prioridade</span>
                </div>
                <span className="font-medium">2 tarefas</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span>Média Prioridade</span>
                </div>
                <span className="font-medium">1 tarefa</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span>Baixa Prioridade</span>
                </div>
                <span className="font-medium">1 tarefa</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recentemente Concluídas</CardTitle>
            <CardDescription>Tarefas concluídas recentemente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Criar wireframes da homepage</p>
                  <p className="text-xs text-muted-foreground">Concluída há 2 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Atualizar fluxo de autenticação</p>
                  <p className="text-xs text-muted-foreground">Concluída ontem</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Revisar documentação da API</p>
                  <p className="text-xs text-muted-foreground">Concluída há 2 dias</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Próximos Eventos</CardTitle>
          <CardDescription>Reuniões e prazos dos próximos dias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">Projeto: {event.project}</p>
                </div>
                <div className="flex items-center text-sm">
                  <CalendarDays className="mr-1 h-4 w-4 text-primary" />
                  <span>{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Ver Calendário Completo
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visão Mensal</CardTitle>
          <CardDescription>Visualização do calendário de eventos e prazos</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <CalendarDays className="h-16 w-16 text-muted-foreground/50" />
            <p className="mt-2 text-sm text-muted-foreground">Visualização do calendário</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Membros da Equipe</CardTitle>
          <CardDescription>Pessoas que trabalham com você nos projetos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="mt-2 font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho da Equipe</CardTitle>
            <CardDescription>Taxa de conclusão de tarefas por membro</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
              <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
              <p className="mt-2 text-sm text-muted-foreground">Gráfico de desempenho da equipe</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Trabalho</CardTitle>
            <CardDescription>Tarefas atribuídas atualmente à equipe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{member.name}</span>
                    </div>
                    <span className="text-sm">{Math.floor(Math.random() * 10) + 1} tarefas</span>
                  </div>
                  <Progress value={Math.floor(Math.random() * 100)} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Últimas atualizações dos seus projetos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b pb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Sarah entrou em Redesign do Site</p>
                  <p className="text-xs text-muted-foreground">Há 2 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b pb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Tarefa "Criar wireframes" concluída</p>
                  <p className="text-xs text-muted-foreground">Ontem</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Novo sprint iniciado para App Mobile</p>
                  <p className="text-xs text-muted-foreground">Há 2 dias</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Ver Toda Atividade
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Ações e atalhos mais usados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                <Plus className="h-6 w-6" />
                <span>Nova Tarefa</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                <Users className="h-6 w-6" />
                <span>Adicionar Membro</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                <CalendarDays className="h-6 w-6" />
                <span>Agendar Reunião</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                <Trello className="h-6 w-6" />
                <span>Criar Sprint</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
