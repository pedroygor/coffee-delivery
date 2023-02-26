import ShoppingCartProvider from 'context/ShoppingCartProvider'
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'Router'

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Router />
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
