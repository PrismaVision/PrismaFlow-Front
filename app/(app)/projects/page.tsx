import Link from "next/link"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function ProjectsPage() {
  // Dados de exemplo
  const projects = [
    {
      id: "1",
      name: "Redesign do Site",
      description: "Redesenhar o site da empresa com um visual moderno",
      progress: 75,
      status: "Em andamento",
      dueDate: "15 Out, 2023",
    },
    {
      id: "2",
      name: "Desenvolvimento de App Mobile",
      description: "Desenvolver um aplicativo para iOS e Android",
      progress: 40,
      status: "Em andamento",
      dueDate: "1 Dez, 2023",
    },
    {
      id: "3",
      name: "Campanha de Marketing",
      description: "Planejar e executar uma campanha de marketing para o Q4",
      progress: 20,
      status: "Planejamento",
      dueDate: "10 Nov, 2023",
    },
    {
      id: "4",
      name: "Lançamento de Produto",
      description: "Preparar o lançamento da nova linha de produtos",
      progress: 10,
      status: "Planejamento",
      dueDate: "5 Jan, 2024",
    },
    {
      id: "5",
      name: "Portal do Cliente",
      description: "Construir um portal do cliente para gerenciamento de contas",
      progress: 60,
      status: "Em andamento",
      dueDate: "30 Out, 2023",
    },
    {
      id: "6",
      name: "Ferramentas Internas",
      description: "Desenvolver ferramentas internas para produtividade da equipe",
      progress: 90,
      status: "Revisão",
      dueDate: "10 Out, 2023",
    },
  ]

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">Projetos</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Projeto
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar projetos..." className="pl-8" />
        </div>
        <Button variant="outline">Filtrar</Button>
        <Button variant="outline">Ordenar</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progresso</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium">Status: </span>
                  <span>{project.status}</span>
                </div>
                <div>
                  <span className="font-medium">Entrega: </span>
                  <span>{project.dueDate}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/projects/${project.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Ver Projeto
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
