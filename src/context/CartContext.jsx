import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id))
  }

  return (
    <CartContext value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext)
}
