import { ReactNode, useState } from 'react'
import { ICoffeeCart } from './ShoppingCartContext'
import ShoppingCartContext from './ShoppingCartContext'
import { infoCoffees } from 'utils/infoCoffees'

interface IShoppingCartProvider {
  children: ReactNode
}

function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cart, setCart] = useState<ICoffeeCart[]>([])
  const [products] = useState<ICoffeeCart[]>(infoCoffees)

  const addCoffee = (coffee: ICoffeeCart) => {
    const newCart = [...cart, coffee]
    setCart(newCart)
  }

  const removeCoffee = (idCoffee: number) => {
    const newCart = cart.filter((item) => item.id !== idCoffee)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const setQuantity = (idProduct: number, quantity: number) => {
    const newCart = cart.map((item) => {
      if (item.id === idProduct) {
        return {
          ...item,
          quantidade: quantity
        }
      }
      return item
    })
    setCart(newCart)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        products,
        addCoffee,
        removeCoffee,
        clearCart,
        setQuantity
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
