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
      message: "John mencionou você em um comentário",
      project: "Redesign do Site",
      task: "Design da Página Inicial",
      time: "Há 2 horas",
      read: false,
    },
    {
      id: "2",
      type: "assignment",
      message: "Sarah atribuiu uma tarefa para você",
      project: "Desenvolvimento de App Mobile",
      task: "Autenticação de Usuário",
      time: "Ontem",
      read: false,
    },
    {
      id: "3",
      type: "comment",
      message: "Novo comentário na sua tarefa",
      project: "Redesign do Site",
      task: "Integração de API",
      time: "Há 2 dias",
      read: true,
    },
    {
      id: "4",
      type: "sprint",
      message: "Sprint 3 começa amanhã",
      project: "Redesign do Site",
      time: "Há 2 dias",
      read: true,
    },
    {
      id: "5",
      type: "mention",
      message: "Bob mencionou você em um comentário",
      project: "Campanha de Marketing",
      task: "Calendário de Conteúdo",
      time: "Há 3 dias",
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
          <h1 className="text-3xl font-bold">Notificações</h1>
          <p className="text-muted-foreground">Fique atualizado com as últimas atividades</p>
        </div>
        <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
          Marcar todas como lidas
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">
            Todas
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-medium">{notifications.length}</span>
          </TabsTrigger>
          <TabsTrigger value="unread">
            Não lidas
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-medium">{unreadCount}</span>
          </TabsTrigger>
          <TabsTrigger value="mentions">Menções</TabsTrigger>
          <TabsTrigger value="assignments">Atribuições</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Todas as Notificações</CardTitle>
              <CardDescription>Veja todas as suas notificações em um só lugar</CardDescription>
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
                          Projeto: {notification.project}
                          {notification.task && ` • Tarefa: ${notification.task}`}
                        </p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                          Marcar como lida
                        </Button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Bell className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">Sem notificações</h3>
                    <p className="text-muted-foreground">
                      Você está em dia! Volte mais tarde para novas notificações.
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
              <CardTitle>Notificações Não Lidas</CardTitle>
              <CardDescription>Veja suas notificações não lidas</CardDescription>
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
                            Projeto: {notification.project}
                            {notification.task && ` • Tarefa: ${notification.task}`}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                          Marcar como lida
                        </Button>
                      </div>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">Tudo em dia!</h3>
                    <p className="text-muted-foreground">Você não tem notificações não lidas.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="mentions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Menções</CardTitle>
              <CardDescription>Veja notificações onde você foi mencionado</CardDescription>
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
                            Projeto: {notification.project}
                            {notification.task && ` • Tarefa: ${notification.task}`}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                            Marcar como lida
                          </Button>
                        )}
                      </div>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <User className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">Nenhuma menção</h3>
                    <p className="text-muted-foreground">Você ainda não foi mencionado em nenhum comentário.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Atribuições</CardTitle>
              <CardDescription>Veja tarefas atribuídas a você</CardDescription>
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
                            Projeto: {notification.project}
                            {notification.task && ` • Tarefa: ${notification.task}`}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                            Marcar como lida
                          </Button>
                        )}
                      </div>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">Nenhuma atribuição</h3>
                    <p className="text-muted-foreground">Você ainda não tem tarefas atribuídas.</p>
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
