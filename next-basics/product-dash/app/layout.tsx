import './globals.css'
import Link from 'next/link'
import { Providers } from './providers'
import { FavoritesCount } from '@/components/FavoritesCount'
import { DarkModeToggle } from '@/components/DarkModeToggle'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark:bg-gray-800 dark:text-white">
      <body>
        <Providers>
          <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                Product Dashboard
              </Link>
              <div className="space-x-4 flex items-center">
                <Link href="/products">Products</Link>
                <FavoritesCount />
                <DarkModeToggle />
              </div>
            </div>
          </nav>
          <main className="container mx-auto mt-8 px-4">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

