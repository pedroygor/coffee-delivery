import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext'
import { useNavigate } from 'react-router-dom'

interface CoffeeCardProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  categorias: string[]
  quantidade: number
}

export const CoffeeCard = ({
  id,
  name,
  description,
  price,
  image,
  categorias,
  quantidade
}: CoffeeCardProps) => {
  const [quantidadePedido, setQuantidadePedido] = useState(quantidade)
  const { addCoffee, cart } = useContext(ShoppingCartContext)
  const navigate = useNavigate()

  const handleAdd = () => {
    if (quantidadePedido < 20) {
      setQuantidadePedido(quantidadePedido + 1)
    }
  }

  const handleRemove = () => {
    if (quantidadePedido > 1) {
      setQuantidadePedido(quantidadePedido - 1)
    }
  }

  const handleAddToCart = () => {
    if (cart.find((item) => item.id === id)) {
      return
    }

    addCoffee({
      id,
      name,
      description,
      price,
      image,
      categorias,
      quantidade: quantidadePedido
    })
    navigate('/carrinho')
  }

  return (
    <div className="relative flex h-[310px] w-64 flex-col items-center justify-end gap-4 rounded-card bg-base-card">
      <img
        src={image}
        alt={name}
        className="absolute -top-5 h-28 w-28 object-cover"
      />

      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-row items-center justify-center gap-1">
            {categorias.map((item) => (
              <span
                key={item}
                className="rounded-full bg-produto-yellowLight p-2 text-center font-roboto text-[10px] font-bold uppercase text-produto-yellowDark"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-baloo text-xl font-bold text-base-baseTitle">
              {name}
            </h1>
            <p className="text-center text-sm font-normal text-base-description">
              {description}
            </p>
          </div>
        </div>
        <div className="mb-5 mt-6 flex w-full items-center justify-center gap-5">
          <div className="flex items-end gap-1 text-base-baseText">
            <span className="font-roboto text-sm font-normal leading-4">
              R$
            </span>
            <span className="font-baloo text-2xl font-bold leading-6">
              {price.toFixed(2)}
            </span>
          </div>

          <div className="flex gap-2 ">
            <div className="flex h-9 items-center justify-center gap-1 rounded-lg bg-base-baseButton p-2">
              <button
                className="text-produto-purple transition-colors duration-300 ease-in-out hover:text-produto-purpleDark"
                onClick={handleRemove}
              >
                <Minus size={16} weight="fill" />
              </button>
              <span className="font-baloo text-xl font-normal">
                {quantidadePedido}
              </span>
              <button
                className="text-produto-purple transition-colors duration-300 ease-in-out hover:text-produto-purpleDark"
                onClick={handleAdd}
              >
                <Plus size={16} weight="fill" />
              </button>
            </div>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-md bg-produto-purpleDark p-2 text-white transition-colors duration-300 ease-in-out hover:bg-produto-purple"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
