import { fetchProducts } from '@/utils/api'
import { ProductCard } from '@/components/ProductCard'
import { SearchBar } from '@/components/SearchBar'
import Link from 'next/link'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1
  const limit = 12
  const offset = (page - 1) * limit

  const title = typeof searchParams.title === 'string' ? searchParams.title : undefined
  const categoryId = typeof searchParams.categoryId === 'string' ? parseInt(searchParams.categoryId) : undefined
  const price_min = typeof searchParams.price_min === 'string' ? parseInt(searchParams.price_min) : undefined
  const price_max = typeof searchParams.price_max === 'string' ? parseInt(searchParams.price_max) : undefined

  const products = await fetchProducts({
    offset,
    limit,
    title,
    categoryId,
    price_min,
    price_max,
  })

  const buildPaginationLink = (newPage: number) => {
    const params = new URLSearchParams(searchParams as Record<string, string>)
    params.set('page', newPage.toString())
    return `/products?${params.toString()}`
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="mb-6">
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
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
      <div className="mt-8 flex justify-between">
        {page > 1 && (
          <Link
            href={buildPaginationLink(page - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Previous Page
          </Link>
        )}
        <Link
          href={buildPaginationLink(page + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-auto"
        >
          Next Page
        </Link>
      </div>
    </div>
  )
}

