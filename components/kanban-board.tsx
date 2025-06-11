"use client"

import { useState } from "react"
import { Clock, MessageSquare, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { closestCenter, DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { DraggableItem } from "./droggable-effect"


// Tipagem das tarefas
export type Task = {
  id: string
  title: string
  description: string
  status: "to-do" | "in-progress" | "review" | "done"
  priority: "low" | "medium" | "high"
  assignee?: {
    name: string
    avatar: string
  }
  dueDate?: string
  comments: number
  subtasks: {
    total: number
    completed: number
  }
  image?: string
}

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design homepage mockup",
      description: "Create a mockup for the new homepage design",
      status: "to-do",
      priority: "high",
      assignee: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      dueDate: "Oct 10",
      comments: 3,
      subtasks: {
        total: 5,
        completed: 2,
      },
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "2",
      title: "Implement user authentication",
      description: "Set up user authentication with OAuth",
      status: "in-progress",
      priority: "high",
      assignee: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      dueDate: "Oct 12",
      comments: 2,
      subtasks: {
        total: 3,
        completed: 1,
      },
    },
    {
      id: "3",
      title: "Create API documentation",
      description: "Document all API endpoints and parameters",
      status: "in-progress",
      priority: "medium",
      assignee: {
        name: "Bob Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      dueDate: "Oct 15",
      comments: 0,
      subtasks: {
        total: 2,
        completed: 0,
      },
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "4",
      title: "Design system components",
      description: "Create reusable components for the design system",
      status: "review",
      priority: "medium",
      assignee: {
        name: "Alice Williams",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      comments: 5,
      subtasks: {
        total: 8,
        completed: 6,
      },
    },
    {
      id: "5",
      title: "Optimize database queries",
      description: "Improve performance of slow database queries",
      status: "done",
      priority: "high",
      assignee: {
        name: "Tom Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      comments: 2,
      subtasks: {
        total: 4,
        completed: 4,
      },
    },
    {
      id: "6",
      title: "Fix responsive layout issues",
      description: "Address layout problems on mobile devices",
      status: "done",
      priority: "low",
      assignee: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      comments: 1,
      subtasks: {
        total: 3,
        completed: 3,
      },
      image: "/placeholder.svg?height=100&width=200",
    },
  ])

  const statuses: Task["status"][] = ["to-do", "in-progress", "review", "done"]
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  const grouped = statuses.reduce<Record<string, Task[]>>((acc, status) => {
    acc[status] = tasks.filter((t) => t.status === status)
    return acc
  }, {})

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const [activeStatus] = active.id.toString().split("::")
    const [overStatus] = over.id.toString().split("::")

    const activeIndex = grouped[activeStatus].findIndex((t) => t.id === active.id.toString().split("::")[1])
    const overIndex = grouped[overStatus].findIndex((t) => t.id === over.id.toString().split("::")[1])

    setTasks((prev) => {
      const newTasks = [...prev]
      const task = newTasks.find((t) => t.id === active.id.toString().split("::")[1])
      if (!task) return prev

      task.status = overStatus as Task["status"]

      return arrayMove(
        newTasks,
        prev.findIndex((t) => t.id === task.id),
        prev.findIndex((t) => t.status === overStatus && t.id === grouped[overStatus][overIndex]?.id)
      )
    })
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 h-full">
        {statuses.map((status) => (
          <div key={status} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-base md:text-lg lg:text-xl font-medium capitalize">{status.replace("-", " ")}</h3>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  {grouped[status].length}
                </span>
              </div>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add task</span>
              </Button>
            </div>

            <SortableContext
              id={status}
              items={grouped[status].map((t) => `${status}::${t.id}`)}
              strategy={verticalListSortingStrategy}

            >
              <div className="space-y-4">
                {grouped[status].map((task) => (
                  <DraggableItem key={task.id} id={`${status}::${task.id}`}>
                    <Card className="bg-card">
                      <CardHeader className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Mais Opções</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Excluir</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        {task.image && (
                          <div className="mb-3 mt-2 overflow-hidden rounded-md">
                            <img
                              src={task.image}
                              alt={task.title}
                              className="h-auto w-full object-cover"
                            />
                          </div>
                        )}

                        <div className="mt-2 space-y-2">
                          {task.subtasks.total > 0 && (
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>Subtasks</span>
                                <span>
                                  {task.subtasks.completed}/{task.subtasks.total}
                                </span>
                              </div>
                              <Progress
                                value={(task.subtasks.completed / task.subtasks.total) * 100}
                              />
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            {task.assignee && (
                              <div className="flex items-center gap-1">
                                <img
                                  src={task.assignee.avatar}
                                  alt={task.assignee.name}
                                  className="h-6 w-6 rounded-full"
                                  title={task.assignee.name}
                                />
                              </div>
                            )}

                            <div className="flex items-center gap-2">
                              {task.dueDate && (
                                <div className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs">
                                  <Clock className="h-3 w-3" />
                                  <span>{task.dueDate}</span>
                                </div>
                              )}
                              {task.comments > 0 && (
                                <div className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs">
                                  <MessageSquare className="h-3 w-3" />
                                  <span>{task.comments}</span>
                                </div>
                              )}
                              <div
                                className={`rounded-full px-2 py-1 text-xs ${task.priority === "high"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                  : task.priority === "medium"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                  }`}
                              >
                                {task.priority}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DraggableItem>
                ))}
              </div>
            </SortableContext>
          </div>
        ))}
      </div>
    </DndContext>
  )
}