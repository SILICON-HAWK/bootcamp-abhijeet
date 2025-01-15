import { notFound } from 'next/navigation'
import Image from 'next/image'
import { fetchProduct } from '@/utils/api'
import { FavoriteButton } from '@/components/FavoriteButton'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  
  if (isNaN(productId)) {
    notFound();
  }

  const product = await fetchProduct(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="mb-4">
        {product.images.map((image, index) => (
          <Image key={index} src={image || "/placeholder.svg"} alt={`${product.title} - Image ${index + 1}`} width={400} height={400} className="w-full h-96 object-cover rounded-lg mb-2" />
        ))}
      </div>
      <p className="text-xl mb-2">${product.price.toFixed(2)}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="mb-4">
        Category: <span className="font-semibold">{product.category.name}</span>
      </p>
      <FavoriteButton productId={product.id} />
    </div>
  )
}

