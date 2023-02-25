import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.svg'

export const Header = () => {
  return (
    <header className="mx-auto flex items-center justify-between py-8 sm:w-11/12 xl:w-4/5">
      <img src={logo} alt="" />
      <div className="flex items-center justify-center gap-3">
        <div className="flex h-9 items-center justify-center gap-1 rounded-md bg-produto-purpleLight px-2 text-sm leading-[18px] text-produto-purple">
          <MapPin size={22} weight="fill" />
          <span>Banabuiú, CE</span>
        </div>
        <Link
          to="/carrinho"
          className="flex h-9 w-9 items-center justify-center rounded-md bg-produto-yellowLight"
        >
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </Link>
      </div>
    </header>
  )
}
