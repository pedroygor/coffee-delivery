import CheckoutProvider from 'context/checkout/CheckoutProvider'
import ShoppingCartProvider from 'context/shoppingCart/ShoppingCartProvider'
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'Router'

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <CheckoutProvider>
          <Router />
        </CheckoutProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
