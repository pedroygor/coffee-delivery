import { CoffeeCard } from './CoffeeCard'
import ShoppingCartContext from '../context/shoppingCart/ShoppingCartContext'
import { useContext } from 'react'

export const Coffees = () => {
  const { products } = useContext(ShoppingCartContext)

  return (
    <div className="mx-auto my-16">
      <h1 className="mb-16 font-baloo text-3xl font-bold text-base-baseSubtitle">
        Nossos Cafés
      </h1>
      <div className="flex flex-wrap gap-8 xl:grid xl:grid-cols-4">
        {products.map((item) => (
          <CoffeeCard
            id={item.id}
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            categorias={item.categorias}
            quantidade={item.quantidade}
          />
        ))}
      </div>
    </div>
  )
}
