import { ReactNode, useState } from 'react'
import { ICoffeeCart } from './ShoppingCartContext'
import ShoppingCartContext from './ShoppingCartContext'
import { infoCoffees } from 'utils/infoCoffees'

interface IShoppingCartProvider {
  children: ReactNode
}

function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cart, setCart] = useState<ICoffeeCart[]>([])
  const [products, setProducts] = useState<ICoffeeCart[]>(infoCoffees)

  const addCoffee = (coffee: ICoffeeCart) => {
    const newCart = [...cart, coffee]
    setCart(newCart)
  }

  const removeCoffee = (coffee: ICoffeeCart) => {
    const newCart = cart.filter((item) => item.id !== coffee.id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        products,
        setProducts,
        addCoffee,
        removeCoffee,
        clearCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
