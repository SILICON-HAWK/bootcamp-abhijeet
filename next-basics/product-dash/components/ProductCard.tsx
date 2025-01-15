import Image from 'next/image'
import Link from 'next/link'
import { FavoriteButton } from './FavoriteButton'

interface ProductCardProps {
  id: number
  title: string
  price: number
  images: string[]
  category: {
    id: number
    name: string
  }
}

export function ProductCard({ id, title, price, images, category }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <Image src={images[0] || "/placeholder.svg"} alt={title} width={200} height={200} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mb-4">Category: {category.name}</p>
      <div className="flex justify-between items-center">
        <Link
          href={`/products/${id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </Link>
        <FavoriteButton productId={id} />
      </div>
    </div>
  )
}

