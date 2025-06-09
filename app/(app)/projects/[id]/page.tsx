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

  // Sample project data
  const project = {
    id: projectId,
    name: "Website Redesign",
    description: "Redesign the company website with a modern look and feel",
    progress: 75,
    status: "In Progress",
    dueDate: "Oct 15, 2023",
    members: [
      { id: "1", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "2", name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "3", name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "4", name: "Alice Williams", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "5", name: "Tom Brown", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    sprints: [
      { id: "1", name: "Sprint 1", status: "Completed", startDate: "Aug 1", endDate: "Aug 15" },
      { id: "2", name: "Sprint 2", status: "Completed", startDate: "Aug 16", endDate: "Aug 31" },
      { id: "3", name: "Sprint 3", status: "In Progress", startDate: "Sep 1", endDate: "Sep 15" },
      { id: "4", name: "Sprint 4", status: "Planned", startDate: "Sep 16", endDate: "Sep 30" },
    ],
  }

  const [activeTab, setActiveTab] = useState("board")
  const [activeSprint, setActiveSprint] = useState("3") // Sprint 3 is active
  const [members, setMembers] = useState(project.members)

  // Function to remove a member
  const removeMember = (id: string) => {
    setMembers(members.filter((member) => member.id !== id))
  }

  return (
    <div className="container py-6 space-y-6">
      {/* Project Header */}
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
                Overview
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-xl font-semibold">Project Overview</SheetTitle>
                </div>
              </SheetHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground text-sm">
                    This project aims to redesign the company website with a modern look and feel. The new design will
                    be responsive, accessible, and optimized for performance. We will also improve the user experience
                    and add new features to enhance user engagement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Goals</h3>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm">
                    <li>Improve user experience and engagement</li>
                    <li>Increase conversion rates by 20%</li>
                    <li>Reduce bounce rate by 15%</li>
                    <li>Ensure accessibility compliance</li>
                    <li>Optimize for mobile devices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Team</h3>
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
                  <h3 className="text-lg font-medium mb-2">Timeline</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Due: {project.dueDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Current Sprint: {project.sprints.find((s) => s.id === activeSprint)?.name}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5">
                        <Users className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Sarah joined the project</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Sprint 3 started</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Project Summary Cards - Reorganized */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{project.progress}%</div>
            <Progress value={project.progress} className="mt-2" />
            <div className="mt-2 text-xs text-muted-foreground">Last updated 2 hours ago</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Due: {project.dueDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Current Sprint: {project.sprints.find((s) => s.id === activeSprint)?.name}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Milestones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="font-medium text-sm">Design System Completion</p>
                <p className="text-xs text-muted-foreground">Sprint 3</p>
              </div>
              <div className="text-xs text-muted-foreground">Sep 15</div>
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="font-medium text-sm">Homepage Redesign</p>
                <p className="text-xs text-muted-foreground">Sprint 4</p>
              </div>
              <div className="text-xs text-muted-foreground">Sep 30</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Navigation and Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
        <div className="sticky top-16 z-10 -mx-6 bg-background/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <TabsList className="w-full justify-start h-9 bg-transparent p-0 space-x-6">
            <TabsTrigger
              value="board"
              className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Board
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
              Members
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="board" className="mt-0">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Sprint Board</CardTitle>
                <CardDescription>Manage tasks for the current sprint</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-1">
                  {project.sprints.find((s) => s.id === activeSprint)?.name}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
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
                <CardTitle className="text-xl">Project Backlog</CardTitle>
                <CardDescription>Manage and prioritize tasks for future sprints</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </CardHeader>
            <CardContent>
              <ProjectBacklog />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sprints" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Sprints</CardTitle>
              <CardDescription>Manage project sprints and their timelines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.sprints.map((sprint) => (
                  <div
                    key={sprint.id}
                    className={`flex items-center justify-between rounded-lg border p-4 ${
                      sprint.id === activeSprint ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{sprint.name}</h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs ${
                            sprint.status === "Completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                              : sprint.status === "In Progress"
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
                        {sprint.id === activeSprint ? "Current" : "View"}
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
                <CardTitle className="text-xl">Team Members</CardTitle>
                <CardDescription>Manage team members and their roles</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Member
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
                          {member.id === "1" ? "Project Manager" : "Team Member"}
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
