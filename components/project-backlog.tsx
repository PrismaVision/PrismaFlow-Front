"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, CheckCircle2, Clock, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type BacklogItem = {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  estimate: string
  assignee?: {
    name: string
    avatar: string
  }
  sprint?: string
  selected: boolean
}

export function ProjectBacklog() {
  // Sample backlog data
  const [backlogItems, setBacklogItems] = useState<BacklogItem[]>([
    {
      id: "1",
      title: "User authentication flow",
      description: "Implement user registration, login, and password reset",
      priority: "high",
      estimate: "8 points",
      assignee: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      sprint: "Sprint 4",
      selected: false,
    },
    {
      id: "2",
      title: "Dashboard analytics",
      description: "Create analytics dashboard with charts and metrics",
      priority: "medium",
      estimate: "5 points",
      assignee: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      selected: false,
    },
    {
      id: "3",
      title: "Mobile responsive design",
      description: "Ensure all pages work well on mobile devices",
      priority: "high",
      estimate: "3 points",
      selected: false,
    },
    {
      id: "4",
      title: "Payment integration",
      description: "Integrate with payment gateway for subscriptions",
      priority: "medium",
      estimate: "8 points",
      assignee: {
        name: "Bob Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      selected: false,
    },
    {
      id: "5",
      title: "Email notification system",
      description: "Set up email notifications for important events",
      priority: "low",
      estimate: "3 points",
      selected: false,
    },
    {
      id: "6",
      title: "User profile page",
      description: "Create user profile page with edit functionality",
      priority: "medium",
      estimate: "5 points",
      assignee: {
        name: "Alice Williams",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      sprint: "Sprint 4",
      selected: false,
    },
    {
      id: "7",
      title: "Search functionality",
      description: "Implement search across the application",
      priority: "medium",
      estimate: "5 points",
      selected: false,
    },
    {
      id: "8",
      title: "API documentation",
      description: "Create comprehensive API documentation",
      priority: "low",
      estimate: "2 points",
      assignee: {
        name: "Tom Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      selected: false,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectAll, setSelectAll] = useState(false)

  // Filter backlog items based on search term
  const filteredItems = backlogItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Toggle select all
  const handleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    setBacklogItems(
      backlogItems.map((item) => ({
        ...item,
        selected: newSelectAll,
      })),
    )
  }

  // Toggle select individual item
  const handleSelectItem = (id: string) => {
    setBacklogItems(backlogItems.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)))
    // Update selectAll state based on all items being selected
    const updatedItems = backlogItems.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    setSelectAll(updatedItems.every((item) => item.selected))
  }

  // Move item up in priority
  const moveItemUp = (id: string) => {
    const index = backlogItems.findIndex((item) => item.id === id)
    if (index > 0) {
      const newItems = [...backlogItems]
      const temp = newItems[index]
      newItems[index] = newItems[index - 1]
      newItems[index - 1] = temp
      setBacklogItems(newItems)
    }
  }

  // Move item down in priority
  const moveItemDown = (id: string) => {
    const index = backlogItems.findIndex((item) => item.id === id)
    if (index < backlogItems.length - 1) {
      const newItems = [...backlogItems]
      const temp = newItems[index]
      newItems[index] = newItems[index + 1]
      newItems[index + 1] = temp
      setBacklogItems(newItems)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search backlog items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <Button variant="outline">Filter</Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} aria-label="Select all" />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Priority</TableHead>
              <TableHead className="hidden md:table-cell">Estimate</TableHead>
              <TableHead className="hidden md:table-cell">Assignee</TableHead>
              <TableHead className="hidden md:table-cell">Sprint</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox
                      checked={item.selected}
                      onCheckedChange={() => handleSelectItem(item.id)}
                      aria-label={`Select ${item.title}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground md:hidden">
                      {item.priority} • {item.estimate}
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-1">{item.description}</div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        item.priority === "high"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : item.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {item.priority}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{item.estimate}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.assignee ? (
                      <div className="flex items-center gap-2">
                        <img
                          src={item.assignee.avatar || "/placeholder.svg"}
                          alt={item.assignee.name}
                          className="h-6 w-6 rounded-full"
                        />
                        <span>{item.assignee.name}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Unassigned</span>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.sprint ? (
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{item.sprint}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Backlog</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => moveItemUp(item.id)}
                        disabled={backlogItems.indexOf(item) === 0}
                      >
                        <ArrowUp className="h-4 w-4" />
                        <span className="sr-only">Move up</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => moveItemDown(item.id)}
                        disabled={backlogItems.indexOf(item) === backlogItems.length - 1}
                      >
                        <ArrowDown className="h-4 w-4" />
                        <span className="sr-only">Move down</span>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Assign to Sprint</DropdownMenuItem>
                          <DropdownMenuItem>Assign to User</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-muted-foreground/50" />
                    <h3 className="mt-2 text-lg font-medium">No items found</h3>
                    <p className="text-sm text-muted-foreground">
                      {searchTerm ? "Try adjusting your search term" : "Add items to your backlog to get started"}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {filteredItems.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {filteredItems.filter((item) => item.selected).length} of {filteredItems.length} item(s) selected
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled={!filteredItems.some((item) => item.selected)}>
              Add to Sprint
            </Button>
            <Button variant="outline" size="sm" disabled={!filteredItems.some((item) => item.selected)}>
              Assign
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
