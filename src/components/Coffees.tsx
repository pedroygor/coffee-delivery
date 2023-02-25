import { CoffeeCard } from './CoffeeCard'
import { infoCoffees } from 'utils/infoCoffees'

export const Coffees = () => {
  return (
    <div className="mx-auto my-16">
      <h1 className="mb-16 font-baloo text-3xl font-bold text-base-baseSubtitle">
        Nossos Cafés
      </h1>
      <div className="flex flex-wrap gap-8 xl:grid xl:grid-cols-4">
        {infoCoffees.map((item) => (
          <CoffeeCard
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
