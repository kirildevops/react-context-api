import { useContext } from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from '../context/ProductContext'

const ProductList = () => {
  const { products, loading, error } = useContext(ProductContext)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {loading && <p>Loading</p>}
      {error && <div className="error">{error}</div>}
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList
