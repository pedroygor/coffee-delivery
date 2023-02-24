import { DefaultLayout } from 'layouts/DefaultLayout'
import { Home } from 'pages/Home'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="carrinho" element={<div>Carrinho</div>} />
      </Route>
    </Routes>
  )
}
