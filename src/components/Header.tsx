import ShoppingCartContext from '../context/ShoppingCartContext'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.svg'
import { useContext } from 'react'

export const Header = () => {
  const { cart } = useContext(ShoppingCartContext)
  return (
    <header className="mx-auto flex items-center justify-between py-8 sm:w-11/12 xl:w-4/5">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center justify-center gap-3">
        <div className="flex h-9 items-center justify-center gap-1 rounded-md bg-produto-purpleLight px-2 text-sm leading-[18px] text-produto-purple">
          <MapPin size={22} weight="fill" />
          <span>Banabuiú, CE</span>
        </div>
        <Link
          to="/carrinho"
          className="relative flex h-9 w-9 items-center justify-center rounded-md bg-produto-yellowLight"
        >
          <ShoppingCart size={22} weight="fill" color="#C47F17" />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-produto-yellowDark font-roboto text-xs font-bold text-white">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
