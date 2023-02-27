import { createContext } from 'react'

export interface ICheckout {
  rua: string
  numero: number
  bairro: string
  cidade: string
  estado: string
  pagamento: string
}

interface ICheckoutContext {
  checkout: ICheckout
  setCheckout: (checkout: ICheckout) => void
}

const CheckoutContext = createContext({} as ICheckoutContext)

export default CheckoutContext
