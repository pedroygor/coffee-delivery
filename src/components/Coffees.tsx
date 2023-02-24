import { CoffeeCard } from './CoffeeCard'
import { infoCoffees } from 'utils/infoCoffees'

export const Coffees = () => {
  return (
    <div className=" mx-auto mt-10 w-3/5">
      <h1 className="mb-16 font-baloo text-3xl font-bold text-base-baseSubtitle">
        Nossos Cafés
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
