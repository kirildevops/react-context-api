import { createContext, useState, useEffect, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  return <CartContext value={{}}>{children}</CartContext>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext)
}
