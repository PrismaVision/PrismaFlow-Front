"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Clock, MessageSquare, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

type Task = {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "review" | "done"
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
  // Sample tasks data
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design homepage mockup",
      description: "Create a mockup for the new homepage design",
      status: "todo",
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

  // Filter tasks by status
  const todoTasks = tasks.filter((task) => task.status === "todo")
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress")
  const reviewTasks = tasks.filter((task) => task.status === "review")
  const doneTasks = tasks.filter((task) => task.status === "done")

  // Function to handle drag end
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    // If there's no destination or the item was dropped back to its original position
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return
    }

    // Get the task that was dragged
    const task = tasks.find((t) => t.id === draggableId)
    if (!task) return

    // Create a new array without the dragged task
    const newTasks = tasks.filter((t) => t.id !== draggableId)

    // Update the task status based on the destination column
    const updatedTask = {
      ...task,
      status: destination.droppableId as Task["status"],
    }

    // Add the updated task to the tasks array
    setTasks([...newTasks, updatedTask])
  }

  // Render a task card
  const renderTaskCard = (task: Task, index: number) => (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`mb-4 ${snapshot.isDragging ? "opacity-70" : ""}`}
        >
          <Card className="h-full">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{task.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Task menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => moveTask(task.id, "todo")}>Move to To Do</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => moveTask(task.id, "in-progress")}>
                      Move to In Progress
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => moveTask(task.id, "review")}>Move to Review</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => moveTask(task.id, "done")}>Move to Done</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription className="line-clamp-2 text-xs">{task.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              {task.image && (
                <div className="mb-3 mt-2 rounded-md overflow-hidden">
                  <img src={task.image || "/placeholder.svg"} alt={task.title} className="w-full h-auto object-cover" />
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
                    <Progress value={(task.subtasks.completed / task.subtasks.total) * 100} />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  {task.assignee && (
                    <div className="flex items-center gap-1">
                      <img
                        src={task.assignee.avatar || "/placeholder.svg"}
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
                      className={`rounded-full px-2 py-1 text-xs ${
                        task.priority === "high"
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
        </div>
      )}
    </Draggable>
  )

  // Function to move a task to a different status (for dropdown menu)
  const moveTask = (taskId: string, newStatus: Task["status"]) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
              </div>
              <h3 className="font-medium">To Do</h3>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{todoTasks.length}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add task</span>
            </Button>
          </div>
          <Droppable droppableId="todo">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="min-h-[200px]">
                {todoTasks.map((task, index) => renderTaskCard(task, index))}
                {provided.placeholder}
                {todoTasks.length === 0 && (
                  <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
                    No tasks
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
              <h3 className="font-medium">In Progress</h3>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{inProgressTasks.length}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add task</span>
            </Button>
          </div>
          <Droppable droppableId="in-progress">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="min-h-[200px]">
                {inProgressTasks.map((task, index) => renderTaskCard(task, index))}
                {provided.placeholder}
                {inProgressTasks.length === 0 && (
                  <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
                    No tasks
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-yellow-100 p-1 dark:bg-yellow-900">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              </div>
              <h3 className="font-medium">Review</h3>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{reviewTasks.length}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add task</span>
            </Button>
          </div>
          <Droppable droppableId="review">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="min-h-[200px]">
                {reviewTasks.map((task, index) => renderTaskCard(task, index))}
                {provided.placeholder}
                {reviewTasks.length === 0 && (
                  <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
                    No tasks
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <h3 className="font-medium">Done</h3>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{doneTasks.length}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add task</span>
            </Button>
          </div>
          <Droppable droppableId="done">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="min-h-[200px]">
                {doneTasks.map((task, index) => renderTaskCard(task, index))}
                {provided.placeholder}
                {doneTasks.length === 0 && (
                  <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
                    No tasks
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}
