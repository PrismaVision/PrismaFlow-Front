import { Clock } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
            <Link href="/" className="absolute left-4 top-4 flex items-center gap-2 md:left-8 md:top-8">
                <Clock className="h-6 w-6" />
                <span className="text-xl font-bold">TaskFlow</span>
            </Link>
            {children}
        </div>
    )
}