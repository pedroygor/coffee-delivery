import { createContext } from 'react'

export interface ICoffeeCart {
  id: number
  name: string
  description: string
  price: number
  image: string
  categorias: string[]
  quantidade: number
}

export interface IShoppingCartContext {
  cart: ICoffeeCart[]
  products: ICoffeeCart[]
  setProducts: (products: ICoffeeCart[]) => void
  addCoffee: (coffee: ICoffeeCart) => void
  removeCoffee: (coffee: ICoffeeCart) => void
  clearCart: () => void
}

const ShoppingCartContext = createContext({} as IShoppingCartContext)

export default ShoppingCartContext
