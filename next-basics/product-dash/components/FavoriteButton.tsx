'use client'

import { useFavoriteStore } from '@/store/favoriteStore'

export function FavoriteButton({ productId }: { productId: number }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore()
  const favorite = isFavorite(productId)

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(productId)
    } else {
      addFavorite(productId)
    }
  }

  return (
    <button
      onClick={toggleFavorite}
      className={`px-4 py-2 rounded ${
        favorite
          ? 'bg-red-500 hover:bg-red-600'
          : 'bg-green-400 hover:bg-green-600'
      }`}
    >
      {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  )
}

