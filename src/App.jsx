import { useState, useEffect } from 'react'

const App = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:8000/products')
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        console.log(data)
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error.message}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 object-cover rounded mb-4"
              />
            </div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500 text-sm mb-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
