import { useContext } from 'react'
import { infoCoffees } from 'utils/infoCoffees'

interface ICoffeeCart {
  id: number
  name: string
  description: string
  price: number
  image: string
  categorias: string[]
  quantidade: number
}

interface ShoppingCartContext {
  cart: ICoffeeCart[]
  setCart: (cart: ICoffeeCart[]) => void
  addCoffee: (coffee: ICoffeeCart) => void
  removeCoffee: (coffee: ICoffeeCart) => void
  clearCart: () => void
}
