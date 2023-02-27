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
  addCoffee: (coffee: ICoffeeCart) => void
  removeCoffee: (idCoffee: number) => void
  clearCart: () => void
  setQuantity: (idCoffee: number, quantity: number) => void
}

const ShoppingCartContext = createContext({} as IShoppingCartContext)

export default ShoppingCartContext
