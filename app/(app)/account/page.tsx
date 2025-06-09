"use client"

import { useState } from "react"
import { Bell, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false)

  // Dados de exemplo do usuário
  const user = {
    name: "João da Silva",
    email: "joao.silva@exemplo.com",
    avatar: "/placeholder.svg?height=128&width=128",
    bio: "Gerente de produto com mais de 5 anos de experiência em SaaS.",
    role: "Gerente de Produto",
    company: "Acme Ltda.",
    location: "São Paulo, SP",
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">Minha Conta</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="billing">Cobrança</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Perfil</CardTitle>
              <CardDescription>Gerencie suas informações de perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-col items-center gap-2 sm:w-1/3">
                  <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-32 w-32 rounded-full" />
                  <Button variant="outline" size="sm">
                    Alterar Avatar
                  </Button>
                </div>
                <div className="space-y-4 sm:w-2/3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" defaultValue={user.name} disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" defaultValue={user.email} disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Cargo</Label>
                      <Input id="role" defaultValue={user.role} disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" defaultValue={user.company} disabled={!isEditing} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Localização</Label>
                    <Input id="location" defaultValue={user.location} disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea id="bio" defaultValue={user.bio} disabled={!isEditing} className="min-h-[100px]" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => setIsEditing(false)}>Salvar Alterações</Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Editar Perfil</Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>Gerencie como você recebe notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificações por E-mail</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="email-tasks">Atribuição de tarefas</Label>
                    </div>
                    <Switch id="email-tasks" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="email-comments">Comentários nas suas tarefas</Label>
                    </div>
                    <Switch id="email-comments" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="email-mentions">Menções</Label>
                    </div>
                    <Switch id="email-mentions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="email-updates">Atualizações de projeto</Label>
                    </div>
                    <Switch id="email-updates" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificações no App</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="app-tasks">Atribuição de tarefas</Label>
                    </div>
                    <Switch id="app-tasks" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="app-comments">Comentários nas suas tarefas</Label>
                    </div>
                    <Switch id="app-comments" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="app-mentions">Menções</Label>
                    </div>
                    <Switch id="app-mentions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="app-updates">Atualizações de projeto</Label>
                    </div>
                    <Switch id="app-updates" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações de Cobrança</CardTitle>
              <CardDescription>Gerencie sua assinatura e detalhes de cobrança</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Plano Pro</h3>
                    <p className="text-sm text-muted-foreground">R$12/usuário/mês</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Alterar Plano
                  </Button>
                </div>
                <div className="mt-4 text-sm">
                  <p>Próxima cobrança: 1 de outubro de 2023</p>
                  <p>5 usuários (R$60/mês)</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Método de Pagamento</h3>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-md bg-muted p-2">
                        <User className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Visa terminando em 4242</p>
                        <p className="text-sm text-muted-foreground">Expira 12/2024</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Atualizar
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Histórico de Cobrança</h3>
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div>
                      <p className="font-medium">1 de setembro de 2023</p>
                      <p className="text-sm text-muted-foreground">Plano Pro - 5 usuários</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$60,00</p>
                      <p className="text-sm text-muted-foreground">Pago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b p-4">
                    <div>
                      <p className="font-medium">1 de agosto de 2023</p>
                      <p className="text-sm text-muted-foreground">Plano Pro - 5 usuários</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$60,00</p>
                      <p className="text-sm text-muted-foreground">Pago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">1 de julho de 2023</p>
                      <p className="text-sm text-muted-foreground">Plano Pro - 5 usuários</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$60,00</p>
                      <p className="text-sm text-muted-foreground">Pago</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Segurança</CardTitle>
              <CardDescription>Gerencie a segurança da sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Alterar Senha</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>Atualizar Senha</Button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Autenticação em Duas Etapas</h3>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Autenticação em Duas Etapas</p>
                      <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança à sua conta</p>
                    </div>
                    <Switch id="2fa" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Sessões</h3>
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div>
                      <p className="font-medium">Sessão Atual</p>
                      <p className="text-sm text-muted-foreground">Chrome no macOS - São Paulo, SP</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Ativa agora</div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">Sessão Anterior</p>
                      <p className="text-sm text-muted-foreground">Safari no iPhone - São Paulo, SP</p>
                    </div>
                    <div className="text-sm text-muted-foreground">2 dias atrás</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive">Encerrar Todas as Sessões</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
