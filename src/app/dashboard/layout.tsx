import { ReactNode } from "react";

interface DashboardLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children } : DashboardLayoutProps) {
   return (
    <div>
        <h1>Dashboard</h1>
        {children}
    </div>
   ) 
}