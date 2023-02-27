import { createContext, Dispatch, SetStateAction } from 'react'

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
  setCheckout: Dispatch<SetStateAction<ICheckout>>
}

const CheckoutContext = createContext({} as ICheckoutContext)

export default CheckoutContext
