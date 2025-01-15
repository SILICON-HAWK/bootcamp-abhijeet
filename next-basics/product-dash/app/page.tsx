import { fetchProducts, fetchCategories } from '@/utils/api'
import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'
import Image from 'next/image'
import { SearchBar } from '@/components/SearchBar'

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    fetchProducts({ limit: 6 }),
    fetchCategories()
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Product Dashboard</h1>
      <SearchBar />
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
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
        <div className="mt-6 text-center">
          <Link href="/products" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            View All Products
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?categoryId=${category.id}`} className="block">
              <div className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <img src={category.image || "/placeholder.svg"} alt={category.name} className="w-full h-48 object-cover rounded" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

