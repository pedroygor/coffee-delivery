import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface CoffeeCardProps {
  name: string
  description: string
  price: number
  image: string
  categorias: string[]
  quantidade: number
}

export const CoffeeCard = ({
  name,
  description,
  price,
  image,
  categorias,
  quantidade
}: CoffeeCardProps) => {
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
                className="rounded-md bg-produto-yellowLight px-2 text-center text-xs font-bold text-produto-yellowDark"
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
              <button className="text-produto-purple">
                <Minus size={16} weight="fill" />
              </button>
              <span className="font-baloo text-xl font-normal">
                {quantidade}
              </span>
              <button className="text-produto-purple">
                <Plus size={16} weight="fill" />
              </button>
            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-md bg-produto-purpleDark p-2 text-white">
              <ShoppingCart size={16} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
