import Link from "next/link";

import { Suspense } from "react";

import { Repositorio } from "../components/Repositorio";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link href="/">Home</Link>
            <Suspense fallback={<p>Carregando repositorios...</p>}>
                {/* @ts-expect-error Async Server Component */}
                <Repositorio />
            </Suspense>
        </div>
    );
};