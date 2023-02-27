import { DefaultLayout } from './layouts/DefaultLayout'
import { ConfirmedOrder } from './pages/ConfirmedOrder'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="carrinho" element={<ShoppingCart />} />
        <Route path="/carrinho/sucesso" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}
