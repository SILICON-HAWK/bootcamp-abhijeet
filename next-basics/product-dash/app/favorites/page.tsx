'use client'

import { useState, useEffect } from 'react'
import { useFavoriteStore } from '@/store/favoriteStore'
import { fetchProduct } from '@/utils/api'
import { ProductCard } from '@/components/ProductCard'

export default function FavoritesPage() {
  const { favorites } = useFavoriteStore()
  const [favoriteProducts, setFavoriteProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      const products = await Promise.all(
        favorites.map((id) => fetchProduct(id))
      )
      setFavoriteProducts(products)
      setLoading(false)
    }

    fetchFavoriteProducts()
  }, [favorites])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Favorites</h1>
      {favoriteProducts.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              images={product.images}
              category={product.category}
            />
          ))}
        </div>
      )}
    </div>
  )
}

