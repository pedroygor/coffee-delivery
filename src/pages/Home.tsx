import { Coffees } from 'components/Coffees'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import tumb from '../assets/images/tumb.svg'
export const Home = () => {
  return (
    <>
      <main className="mt-16 flex w-full items-center justify-center gap-14">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-xl">
            <h1 className="font-baloo text-5xl font-bold leading-[62px] text-base-baseTitle">
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>
            <p className="font-roboto text-base font-normal leading-7 text-base-baseSubtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="flex flex-wrap gap-10 font-roboto text-base-baseText">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-[1000px] bg-produto-yellowDark p-2 text-white">
                  <ShoppingCart size={16} weight="fill" className="w-full" />
                </div>
                <span className="text-base font-normal leading-5">
                  Compra simples e segura
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-[1000px] bg-produto-yellow p-2 text-white">
                  <Timer size={16} weight="fill" />
                </div>
                <span className="text-base font-normal leading-5">
                  Entrega rápida e rastreada
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-[1000px] bg-base-baseText p-2 text-white">
                  <Package size={16} weight="fill" />
                </div>
                <span className="text-base font-normal leading-5">
                  Embalagem mantém o café intacto
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-[1000px] bg-produto-purple p-2 text-white">
                  <Coffee size={16} weight="fill" />
                </div>
                <span className="text-base font-normal leading-5">
                  O café chega fresquinho até você
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={tumb} alt="" className="" />
        </div>
      </main>
      <Coffees />
    </>
  )
}
