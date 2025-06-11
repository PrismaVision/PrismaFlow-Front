import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Badge } from '../../ui/badge'
import { Progress } from '../../ui/progress'

const CardSmall = () => {
    {/* Visão Geral de Produtividade */ }
    const productivityData = {
        tasksCompleted: 42,
        tasksCreated: 67,
        completionRate: 63,
        weeklyChange: 12,
    }
    return (
        <div className="grid gap-6 md:grid-cols-4" >
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Tarefas Concluídas</CardTitle>
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
                        <span className="ml-2">em relação à semana passada</span>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Tarefas Criadas</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{productivityData.tasksCreated}</div>
                    <div className="mt-1 flex items-center text-xs text-muted-foreground">
                        <span>este mês</span>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{productivityData.completionRate}%</div>
                    <Progress value={productivityData.completionRate} className="mt-2" />
                </CardContent>
            </Card>
        </div >
    )
}

export default CardSmall