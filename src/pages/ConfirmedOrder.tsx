import { useContext } from 'react'
import CheckoutContext from '../context/checkout/CheckoutContext'

export const ConfirmedOrder = () => {
  const { checkout } = useContext(CheckoutContext)
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">{checkout.bairro}</h1>
    </div>
  )
}
