'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname()
  const publishRoute = '/anunciar'

  return (
    <header className="flex w-full bg-gradient-to-b from-gray-400 via-stone-300 to-stone-200">
      <div className="container mx-auto flex max-w-7xl justify-between p-4">
        <Link href={'/'} className="text-2xl">
          Header
        </Link>
        <div className="flex gap-4">
          <button>Pokemon</button>
          <button>Tasks</button>
          <button>Random</button>
        </div>
        <Link
          href={publishRoute}
          className={`rounded-xl px-4 py-2 ${
            path === publishRoute ? 'bg-amber-400' : 'bg-stone-300'
          }`}
        >
          Get Pokemons
        </Link>
      </div>
    </header>
  )
}
