'use client'

import { useFavoriteStore } from '@/store/favoriteStore'
import Link from 'next/link'

export function FavoritesCount() {
  const favorites = useFavoriteStore((state) => state.favorites)

  return (
    <Link href="/favorites" className="flex items-center">
      Favorites
      <span className="ml-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        {favorites.length}
      </span>
    </Link>
  )
}

