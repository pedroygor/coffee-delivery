import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import CheckoutContext from '../context/checkout/CheckoutContext'
import illustration from '../assets/images/Illustration.svg'

export const ConfirmedOrder = () => {
  const { checkout } = useContext(CheckoutContext)
  return (
    <div className="mx-auto mt-20 flex h-screen items-start justify-center sm:w-11/12 xl:w-4/5">
      <div>
        <div>
          <h1 className="font-baloo text-3xl font-extrabold text-produto-yellowDark">
            Uhu! Pedido Confirmado
          </h1>
          <p className="mt-1 font-roboto text-xl font-normal text-base-baseSubtitle">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="flex gap-20">
          <div className="w-[500px]">
            <div
              className="mt-10 flex flex-col gap-8 rounded-card border
          border-produto-purpleDark p-10 text-base text-base-baseText
        "
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-produto-purple p-2">
                  <MapPin size={16} weight="fill" color="#fff" />
                </div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {checkout.rua}, {checkout.numero}
                  </strong>{' '}
                  <br />
                  {checkout.bairro} - {checkout.cidade}, {checkout.estado}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-produto-yellow p-2">
                  <Timer size={16} weight="fill" color="#fff" />
                </div>
                <p className="">
                  Previsão de entrega <br />
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-produto-yellowDark p-2">
                  <CurrencyDollar size={16} weight="regular" color="#fff" />
                </div>
                <p className="">
                  Pagamento na Entrega <br />
                  <strong>{checkout.pagamento}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img src={illustration} alt="Ilustração" />
          </div>
        </div>
      </div>
    </div>
  )
}
