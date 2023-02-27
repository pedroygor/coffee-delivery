import ShoppingCartContext from '../context/ShoppingCartContext'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'

interface ShoppingCartCardProps {
  id: number
  name: string
  price: number
  image: string
  quantidade: number
}

export const ShoppingCartCard = ({
  id,
  name,
  price,
  image,
  quantidade
}: ShoppingCartCardProps) => {
  const { removeCoffee, setQuantity } = useContext(ShoppingCartContext)

  const handleAdd = () => {
    setQuantity(id, quantidade + 1)
  }

  const handleRemove = () => {
    if (quantidade > 1) {
      setQuantity(id, quantidade - 1)
    }
  }

  return (
    <>
      <div
        key={id}
        className="flex h-20 items-start justify-between gap-4 px-1 py-2"
      >
        <div className="flex items-center gap-5">
          <img src={image} alt={name} className="h-16 w-16" />
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-sm font-normal leading-5 text-base-baseTitle">
              {name}
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex h-8 w-14 items-center justify-center gap-1 rounded-lg bg-base-baseButton p-2">
                <button
                  className="text-produto-purple transition-colors duration-300 ease-in-out hover:text-produto-purpleDark"
                  onClick={handleRemove}
                >
                  <Minus size={14} weight="fill" />
                </button>
                <span className="font-roboto text-sm font-normal">
                  {quantidade}
                </span>
                <button
                  className="text-produto-purple transition-colors duration-300 ease-in-out hover:text-produto-purpleDark"
                  onClick={handleAdd}
                >
                  <Plus size={14} weight="fill" />
                </button>
              </div>
              <button
                className="flex items-center justify-center gap-1 rounded-md bg-base-baseButton px-2 py-[6px] transition-colors duration-300 ease-in-out hover:bg-base-radio

              "
                onClick={() => removeCoffee(id)}
              >
                <Trash
                  size={14}
                  weight="regular"
                  className="text-produto-purple"
                />
                <span className="text-xs uppercase leading-5 text-base-baseText">
                  remover
                </span>
              </button>
            </div>
          </div>
        </div>
        <p className="font-roboto text-sm font-bold text-base-baseText">
          R$ {(quantidade * price).toFixed(2)}
        </p>
      </div>

      <div>
        <hr className="my-6 border-base-baseButton" />
      </div>
    </>
  )
}
