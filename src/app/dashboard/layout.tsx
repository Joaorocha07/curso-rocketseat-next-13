import { ReactNode } from "react";

interface DashboardLayoutProps {
    children: ReactNode
}

export const metadata = {
    title: {
        default: 'Aplicação',
        template: '%s | Aplicação'
    }
}

export default function AuthLayout({ children } : DashboardLayoutProps) {
   return (
    <div>
        <h1>Dashboard Layout</h1>
        {children}
    </div>
   ) 
}