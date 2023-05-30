import Link from 'next/link';

import { Suspense } from 'react';

import { User } from './components/User';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Suspense fallback={<p>Carregando usuarios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}