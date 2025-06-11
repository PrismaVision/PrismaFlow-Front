"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { CalendarDays, ChevronDown, Clock, Edit, Info, Plus, Settings, Trash2, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { KanbanBoard } from "@/components/kanban-board"
import { ProjectBacklog } from "@/components/project-backlog"

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string

  // Dados de exemplo do projeto
  const project = {
    id: projectId,
    name: "Redesign do Website",
    description: "Redesenhar o site da empresa com um visual moderno e atrativo",
    progress: 75,
    status: "Em andamento",
    dueDate: "15 de Outubro de 2023",
    members: [
      { id: "1", name: "João Silva", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "2", name: "Maria Souza", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "3", name: "Carlos Pereira", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "4", name: "Ana Oliveira", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "5", name: "Pedro Santos", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    sprints: [
      { id: "1", name: "Sprint 1", status: "Concluída", startDate: "1 Ago", endDate: "15 Ago" },
      { id: "2", name: "Sprint 2", status: "Concluída", startDate: "16 Ago", endDate: "31 Ago" },
      { id: "3", name: "Sprint 3", status: "Em andamento", startDate: "1 Set", endDate: "15 Set" },
      { id: "4", name: "Sprint 4", status: "Planejada", startDate: "16 Set", endDate: "30 Set" },
    ],
  }

  const [activeTab, setActiveTab] = useState("board")
  const [activeSprint, setActiveSprint] = useState("3") // Sprint 3 ativa
  const [members, setMembers] = useState(project.members)

  // Função para remover um membro
  const removeMember = (id: string) => {
    setMembers(members.filter((member) => member.id !== id))
  }

  return (
    <div className="py-6 space-y-6">
      {/* Cabeçalho do Projeto */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Info className="mr-2 h-4 w-4" />
                Visão Geral
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-xl font-semibold">Visão Geral do Projeto</SheetTitle>
                </div>
              </SheetHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Descrição</h3>
                  <p className="text-muted-foreground text-sm">
                    Este projeto tem como objetivo redesenhar o site da empresa com um visual moderno e atrativo. O novo design será responsivo, acessível e otimizado para performance. Também iremos melhorar a experiência do usuário e adicionar novas funcionalidades para aumentar o engajamento.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Objetivos</h3>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm">
                    <li>Melhorar a experiência e o engajamento do usuário</li>
                    <li>Aumentar a taxa de conversão em 20%</li>
                    <li>Reduzir a taxa de rejeição em 15%</li>
                    <li>Garantir conformidade com acessibilidade</li>
                    <li>Otimizar para dispositivos móveis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Equipe</h3>
                  <div className="space-y-2">
                    {members.map((member) => (
                      <div key={member.id} className="flex items-center gap-2">
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="h-6 w-6 rounded-full"
                        />
                        <span className="text-sm">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Cronograma</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Entrega: {project.dueDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Sprint Atual: {project.sprints.find((s) => s.id === activeSprint)?.name}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Atividades Recentes</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5">
                        <Users className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Sarah entrou no projeto</p>
                        <p className="text-xs text-muted-foreground">Há 2 horas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Sprint 3 iniciada</p>
                        <p className="text-xs text-muted-foreground">Ontem</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
        </div>
      </div>

      {/* Navegação e Conteúdo do Projeto */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
        <div className="sticky top-16 z-10 -mx-6 bg-background/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <TabsList className="w-full justify-start h-9 bg-transparent p-0 space-x-6">
            <TabsTrigger
              value="board"
              className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Quadro
            </TabsTrigger>
            <TabsTrigger
              value="backlog"
              className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Backlog
            </TabsTrigger>
            <TabsTrigger
              value="sprints"
              className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Sprints
            </TabsTrigger>
            <TabsTrigger
              value="members"
              className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Membros
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="board" className="mt-0">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Quadro da Sprint</CardTitle>
                <CardDescription>Gerencie as tarefas da sprint atual</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-1">
                  {project.sprints.find((s) => s.id === activeSprint)?.name}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Tarefa
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <KanbanBoard />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backlog" className="mt-0">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Backlog do Projeto</CardTitle>
                <CardDescription>Gerencie e priorize tarefas para sprints futuras</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Tarefa
              </Button>
            </CardHeader>
            <CardContent>
              <ProjectBacklog />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sprints" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {project.sprints.map((sprint) => (
                  <div
                    key={sprint.id}
                    className={`flex items-center justify-between rounded-lg border p-4 ${sprint.id === activeSprint ? "border-primary bg-primary/5" : ""
                      }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{sprint.name}</h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs ${sprint.status === "Concluída"
                            ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                            : sprint.status === "Em andamento"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                            }`}
                        >
                          {sprint.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {sprint.startDate} - {sprint.endDate}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveSprint(sprint.id)}
                        disabled={sprint.id === activeSprint}
                      >
                        {sprint.id === activeSprint ? "Atual" : "Ver"}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="members" className="mt-0">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Membros da Equipe</CardTitle>
                <CardDescription>Gerencie os membros da equipe e seus papéis</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Membro
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {members.map((member) => (
                  <div key={member.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {member.id === "1" ? "Gerente de Projeto" : "Membro da Equipe"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => removeMember(member.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
