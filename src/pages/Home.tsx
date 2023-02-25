import { Banner } from 'components/Banner'
import { Coffees } from 'components/Coffees'

export const Home = () => {
  return (
    <div className="mx-auto flex flex-col items-start justify-start sm:w-11/12 xl:w-4/5">
      <Banner />
      <Coffees />
    </div>
  )
}
