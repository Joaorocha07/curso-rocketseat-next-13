import Link from 'next/link';

import { User } from './components/User';
import { Repositorio } from './components/Repositorio';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* @ts-expect-error Async Server Component */}
      <User />

      {/* @ts-expect-error Async Server Component */}
      <Repositorio />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
