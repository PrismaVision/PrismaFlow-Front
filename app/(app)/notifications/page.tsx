"use client"

import { useState } from "react"
import { Bell, CheckCircle2, Clock, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "mention",
      message: "John mentioned you in a comment",
      project: "Website Redesign",
      task: "Homepage Design",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      type: "assignment",
      message: "Sarah assigned you a task",
      project: "Mobile App Development",
      task: "User Authentication",
      time: "Yesterday",
      read: false,
    },
    {
      id: "3",
      type: "comment",
      message: "New comment on your task",
      project: "Website Redesign",
      task: "API Integration",
      time: "2 days ago",
      read: true,
    },
    {
      id: "4",
      type: "sprint",
      message: "Sprint 3 is starting tomorrow",
      project: "Website Redesign",
      time: "2 days ago",
      read: true,
    },
    {
      id: "5",
      type: "mention",
      message: "Bob mentioned you in a comment",
      project: "Marketing Campaign",
      task: "Content Calendar",
      time: "3 days ago",
      read: true,
    },
  ])

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with the latest activity</p>
        </div>
        <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
          Mark all as read
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">
            All
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-medium">{notifications.length}</span>
          </TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-medium">{unreadCount}</span>
          </TabsTrigger>
          <TabsTrigger value="mentions">Mentions</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all your notifications in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 rounded-lg border p-4 ${
                        !notification.read ? "bg-muted/50" : ""
                      }`}
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        {notification.type === "mention" && <User className="h-4 w-4 text-primary" />}
                        {notification.type === "assignment" && <CheckCircle2 className="h-4 w-4 text-primary" />}
                        {notification.type === "comment" && <MessageSquare className="h-4 w-4 text-primary" />}
                        {notification.type === "sprint" && <Clock className="h-4 w-4 text-primary" />}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">{notification.message}</p>
                        <p className="text-sm text-muted-foreground">
                          Project: {notification.project}
                          {notification.task && ` • Task: ${notification.task}`}
                        </p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                          Mark as read
                        </Button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Bell className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">No notifications</h3>
                    <p className="text-muted-foreground">
                      You're all caught up! Check back later for new notifications.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="unread" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>View your unread notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.filter((n) => !n.read).length > 0 ? (
                  notifications
                    .filter((n) => !n.read)
                    .map((notification) => (
                      <div key={notification.id} className="flex items-start gap-4 rounded-lg border p-4 bg-muted/50">
                        <div className="rounded-full bg-primary/10 p-2">
                          {notification.type === "mention" && <User className="h-4 w-4 text-primary" />}
                          {notification.type === "assignment" && <CheckCircle2 className="h-4 w-4 text-primary" />}
                          {notification.type === "comment" && <MessageSquare className="h-4 w-4 text-primary" />}
                          {notification.type === "sprint" && <Clock className="h-4 w-4 text-primary" />}
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">{notification.message}</p>
                          <p className="text-sm text-muted-foreground">
                            Project: {notification.project}
                            {notification.task && ` • Task: ${notification.task}`}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                          Mark as read
                        </Button>
                      </div>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">All caught up!</h3>
                    <p className="text-muted-foreground">You have no unread notifications.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="mentions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mentions</CardTitle>
              <CardDescription>View notifications where you were mentioned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.filter((n) => n.type === "mention").length > 0 ? (
                  notifications
                    .filter((n) => n.type === "mention")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-4 rounded-lg border p-4 ${
                          !notification.read ? "bg-muted/50" : ""
                        }`}
                      >
                        <div className="rounded-full bg-primary/10 p-2">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">{notification.message}</p>
                          <p className="text-sm text-muted-foreground">
                            Project: {notification.project}
                            {notification.task && ` • Task: ${notification.task}`}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                            Mark as read
                          </Button>
                        )}
                      </div>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <User className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">No mentions</h3>
                    <p className="text-muted-foreground">You haven't been mentioned in any comments yet.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>View tasks assigned to you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.filter((n) => n.type === "assignment").length > 0 ? (
                  notifications
                    .filter((n) => n.type === "assignment")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-4 rounded-lg border p-4 ${
                          !notification.read ? "bg-muted/50" : ""
                        }`}
                      >
                        <div className="rounded-full bg-primary/10 p-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium">{notification.message}</p>
                          <p className="text-sm text-muted-foreground">
                            Project: {notification.project}
                            {notification.task && ` • Task: ${notification.task}`}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                            Mark as read
                          </Button>
                        )}
                      </div>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">No assignments</h3>
                    <p className="text-muted-foreground">You don't have any task assignments yet.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
