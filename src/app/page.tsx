import Link from 'next/link';

import { Suspense } from 'react';

import { User } from './components/User';
import { Repositorio } from './components/Repositorio';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando usuarios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
      <Suspense fallback={<p>Carregando repositorios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repositorio />
      </Suspense>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
