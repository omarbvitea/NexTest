'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname()
  const publishRoute = '/anunciar'

  return (
    <header className="fixed flex w-full">
      <div className="container mx-auto flex max-w-7xl justify-between p-4">
        <Link href={'/'} className="text-2xl">
          Header
        </Link>
        <div className="flex gap-4">
          <button>Viviendas</button>
          <button>Locales</button>
          <button>Talleres</button>
        </div>
        <Link
          href={publishRoute}
          className={`rounded-xl px-4 py-2 ${
            path === publishRoute ? 'bg-amber-400' : 'bg-stone-300'
          }`}
        >
          Anunciar propiedad
        </Link>
      </div>
    </header>
  )
}
