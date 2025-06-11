"use client"

import * as React from "react"
import { formatDateRange } from "little-date"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const events = [
    {
        title: "Team Sync Meeting",
        from: "2025-06-12T09:00:00",
        to: "2025-06-12T10:00:00",
    },
    {
        title: "Design Review",
        from: "2025-06-12T11:30:00",
        to: "2025-06-12T12:30:00",
    },
    {
        title: "Client Presentation",
        from: "2025-06-12T14:00:00",
        to: "2025-06-12T15:00:00",
    },
]

export function DashboardCalendar() {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(2025, 5, 12)
    )

    return (
        <div className="w-full py-4">
            <div className="flex-col md:flex-row gap-4 md:gap-6">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full md:w-1/3"
                    required
                />
                <div className="flex flex-col items-start gap-3 border-l">
                    <div className="text-sm font-medium">
                        {date?.toLocaleDateString("pt-BR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            weekday: "long",
                        })}
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        {events.map((event) => (
                            <div
                                key={event.title}
                                className="bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full"
                            >
                                <div className="font-medium">{event.title}</div>
                                <div className="text-muted-foreground text-xs">
                                    {formatDateRange(new Date(event.from), new Date(event.to))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
