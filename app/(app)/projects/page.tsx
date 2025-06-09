import Link from "next/link"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function ProjectsPage() {
  // Sample data
  const projects = [
    {
      id: "1",
      name: "Website Redesign",
      description: "Redesign the company website with a modern look and feel",
      progress: 75,
      status: "In Progress",
      dueDate: "Oct 15, 2023",
    },
    {
      id: "2",
      name: "Mobile App Development",
      description: "Develop a mobile app for iOS and Android platforms",
      progress: 40,
      status: "In Progress",
      dueDate: "Dec 1, 2023",
    },
    {
      id: "3",
      name: "Marketing Campaign",
      description: "Plan and execute a marketing campaign for Q4",
      progress: 20,
      status: "Planning",
      dueDate: "Nov 10, 2023",
    },
    {
      id: "4",
      name: "Product Launch",
      description: "Prepare for the launch of our new product line",
      progress: 10,
      status: "Planning",
      dueDate: "Jan 5, 2024",
    },
    {
      id: "5",
      name: "Customer Portal",
      description: "Build a customer portal for account management",
      progress: 60,
      status: "In Progress",
      dueDate: "Oct 30, 2023",
    },
    {
      id: "6",
      name: "Internal Tools",
      description: "Develop internal tools for team productivity",
      progress: 90,
      status: "Review",
      dueDate: "Oct 10, 2023",
    },
  ]

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search projects..." className="pl-8" />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
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
                  <span>Progress</span>
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
                  <span className="font-medium">Due: </span>
                  <span>{project.dueDate}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/projects/${project.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
