import { ReactNode, useState } from 'react'
import CheckoutContext, { ICheckout } from './CheckoutContext'

interface ICheckoutProvider {
  children: ReactNode
}

function CheckoutProvider({ children }: ICheckoutProvider) {
  const [checkout, setCheckout] = useState<ICheckout>({
    bairro: '',
    cidade: '',
    estado: '',
    numero: 0,
    pagamento: '',
    rua: ''
  } as ICheckout)

  return (
    <CheckoutContext.Provider value={{ checkout, setCheckout }}>
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider
