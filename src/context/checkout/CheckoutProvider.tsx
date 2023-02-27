import { ReactNode, useState } from 'react'
import CheckoutContext, { ICheckout } from './CheckoutContext'

interface ICheckoutProvider {
  children: ReactNode
}

function CheckoutProvider({ children }: ICheckoutProvider) {
  const [checkout, setCheckout] = useState<ICheckout>({
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    pagamento: ''
  })

  return (
    <CheckoutContext.Provider value={{ checkout, setCheckout }}>
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider
