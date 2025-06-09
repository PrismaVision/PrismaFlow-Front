import Link from "next/link"
import { BarChart3, CalendarDays, CheckCircle2, Clock, LineChart, Plus, Star, Trello, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  // Sample data
  const projects = [
    {
      id: "1",
      name: "Website Redesign",
      description: "Redesign the company website with a modern look and feel",
      progress: 75,
      members: 5,
      tasks: { total: 24, completed: 18 },
      favorite: true,
    },
    {
      id: "2",
      name: "Mobile App Development",
      description: "Develop a mobile app for iOS and Android platforms",
      progress: 40,
      members: 8,
      tasks: { total: 36, completed: 14 },
      favorite: true,
    },
    {
      id: "3",
      name: "Marketing Campaign",
      description: "Plan and execute a marketing campaign for Q4",
      progress: 20,
      members: 4,
      tasks: { total: 18, completed: 4 },
      favorite: false,
    },
  ]

  const upcomingTasks = [
    {
      id: "1",
      title: "Design homepage mockup",
      project: "Website Redesign",
      dueDate: "Tomorrow",
      priority: "high",
    },
    {
      id: "2",
      title: "API integration for user authentication",
      project: "Mobile App Development",
      dueDate: "In 2 days",
      priority: "medium",
    },
    {
      id: "3",
      title: "Create content calendar",
      project: "Marketing Campaign",
      dueDate: "Next week",
      priority: "low",
    },
    {
      id: "4",
      title: "Review design system components",
      project: "Website Redesign",
      dueDate: "Today",
      priority: "high",
    },
  ]

  const teamMembers = [
    {
      id: "1",
      name: "John Doe",
      role: "Product Manager",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    {
      id: "3",
      name: "Bob Johnson",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "BJ",
    },
    {
      id: "4",
      name: "Alice Williams",
      role: "Backend Developer",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AW",
    },
  ]

  const upcomingEvents = [
    { id: "1", title: "Sprint Planning", date: "Today, 2:00 PM", project: "Website Redesign" },
    { id: "2", title: "Design Review", date: "Tomorrow, 10:00 AM", project: "Mobile App Development" },
    { id: "3", title: "Team Retrospective", date: "Friday, 3:30 PM", project: "All Projects" },
    { id: "4", title: "Client Meeting", date: "Next Monday, 11:00 AM", project: "Marketing Campaign" },
  ]

  const productivityData = {
    tasksCompleted: 42,
    tasksCreated: 67,
    completionRate: 63,
    weeklyChange: 12,
  }

  const activeSprints = [
    { id: "1", name: "Sprint 3", project: "Website Redesign", progress: 75, endDate: "Oct 15" },
    { id: "2", name: "Sprint 2", project: "Mobile App Development", progress: 40, endDate: "Oct 20" },
  ]

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's an overview of your projects and tasks.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Productivity Overview */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productivityData.tasksCompleted}</div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Badge
                variant="outline"
                className="text-green-600 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
              >
                +{productivityData.weeklyChange}%
              </Badge>
              <span className="ml-2">from last week</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tasks Created</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productivityData.tasksCreated}</div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <span>this month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productivityData.completionRate}%</div>
            <Progress value={productivityData.completionRate} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Sprints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeSprints.length}</div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <span>across {projects.length} projects</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">My Tasks</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="relative">
                {project.favorite && (
                  <div className="absolute right-4 top-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                )}
                <CardHeader className="pb-2">
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
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{project.members} members</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>
                        {project.tasks.completed}/{project.tasks.total} tasks
                      </span>
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

          {/* Active Sprints */}
          <Card>
            <CardHeader>
              <CardTitle>Active Sprints</CardTitle>
              <CardDescription>Currently running sprints across your projects</CardDescription>
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
                      <p className="text-sm text-muted-foreground">Project: {sprint.project}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-sm font-medium">{sprint.progress}% Complete</div>
                      <div className="text-xs text-muted-foreground">Ends on {sprint.endDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Analytics */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Task Distribution</CardTitle>
                <CardDescription>Tasks by status across all projects</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                  <p className="mt-2 text-sm text-muted-foreground">Task distribution chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Productivity Trends</CardTitle>
                <CardDescription>Task completion over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                  <LineChart className="h-16 w-16 text-muted-foreground/50" />
                  <p className="mt-2 text-sm text-muted-foreground">Productivity trend chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Tasks</CardTitle>
              <CardDescription>Tasks assigned to you across all projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            task.priority === "high"
                              ? "bg-red-500"
                              : task.priority === "medium"
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                          }`}
                        />
                        <p className="font-medium">{task.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Project: {task.project}</p>
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
                View All Tasks
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Task Priorities</CardTitle>
                <CardDescription>Breakdown of your tasks by priority</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <span>High Priority</span>
                    </div>
                    <span className="font-medium">2 tasks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span>Medium Priority</span>
                    </div>
                    <span className="font-medium">1 task</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500" />
                      <span>Low Priority</span>
                    </div>
                    <span className="font-medium">1 task</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recently Completed</CardTitle>
                <CardDescription>Tasks you've completed recently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Create wireframes for homepage</p>
                      <p className="text-xs text-muted-foreground">Completed 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Update user authentication flow</p>
                      <p className="text-xs text-muted-foreground">Completed yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Review API documentation</p>
                      <p className="text-xs text-muted-foreground">Completed 2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Calendar Tab */}
        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Meetings and deadlines for the next few days</CardDescription>
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
                      <p className="text-sm text-muted-foreground">Project: {event.project}</p>
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
                View Full Calendar
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Overview</CardTitle>
              <CardDescription>Calendar view of events and deadlines</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex items-center justify-center flex-col">
                <CalendarDays className="h-16 w-16 text-muted-foreground/50" />
                <p className="mt-2 text-sm text-muted-foreground">Calendar view</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>People you work with across projects</CardDescription>
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
                <CardTitle>Team Performance</CardTitle>
                <CardDescription>Task completion rates by team member</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                  <p className="mt-2 text-sm text-muted-foreground">Team performance chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Workload Distribution</CardTitle>
                <CardDescription>Current task assignments across the team</CardDescription>
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
                        <span className="text-sm">{Math.floor(Math.random() * 10) + 1} tasks</span>
                      </div>
                      <Progress value={Math.floor(Math.random() * 100)} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b pb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Sarah joined Website Redesign</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b pb-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Task "Create wireframes" completed</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">New sprint started for Mobile App</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used actions and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                <Plus className="h-6 w-6" />
                <span>New Task</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                <Users className="h-6 w-6" />
                <span>Add Team Member</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                <CalendarDays className="h-6 w-6" />
                <span>Schedule Meeting</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                <Trello className="h-6 w-6" />
                <span>Create Sprint</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
