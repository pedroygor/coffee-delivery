import { useContext } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import ShoppingCartContext from '../context/ShoppingCartContext'
import { IFormInput } from 'interfaces/IFormInput'
import { ShoppingCartCard } from '../components/ShoppingCartCard'
import CheckoutContext, { ICheckout } from '../context/checkout/CheckoutContext'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export const ShoppingCart = () => {
  const { register, handleSubmit, control } = useForm<IFormInput>()
  const { cart, clearCart } = useContext(ShoppingCartContext)
  const { setCheckout } = useContext(CheckoutContext)
  const navigate = useNavigate()

  const frete = cart.length > 0 ? 10 : 0
  const total = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantidade,
    0
  )

  const formatarPagamento = (pagamento: string) => {
    switch (pagamento) {
      case 'dinheiro':
        return 'Dinheiro'
      case 'debito':
        return 'Cartão de Débito'
      case 'credito':
        return 'Cartão de Crédito'
      default:
        return 'Cartão de Crédito'
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio')
      return
    }

    const pagamento = formatarPagamento(data.paymentOption)

    setCheckout({
      rua: data.rua,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.uf,
      pagamento: pagamento
    } as ICheckout)
    clearCart()
    navigate('/carrinho/sucesso')
  }

  return (
    <div className="mx-auto flex flex-col items-start justify-start sm:w-11/12 xl:w-4/5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-7">
        <div>
          <h1 className="mb-4 font-baloo text-lg font-bold leading-6 text-base-baseSubtitle">
            Complete seu pedido
          </h1>
          <div className="bg-base-card p-10">
            <div className="mb-8 flex h-11 items-start gap-2">
              <MapPinLine
                size={22}
                weight="regular"
                color="#C47F17"
                className="mt-[1px]"
              />
              <div>
                <h2 className="text-base font-normal leading-5 text-base-baseSubtitle">
                  Endereço de entrega
                </h2>
                <p className="text-sm font-normal leading-4 text-base-baseText">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <div className="flex w-full flex-wrap gap-x-3 gap-y-4">
              <input
                className="max-w-[200px] rounded border border-base-baseButton bg-base-baseInput p-3
                text-sm leading-4 text-base-baseText outline-none focus:border-produto-yellowDark"
                type="text"
                id="cep"
                placeholder="CEP"
                {...register('cep', { required: true })}
              />

              <input
                className="w-full rounded border border-base-baseButton bg-base-baseInput p-3
                text-sm leading-4 text-base-baseText outline-none focus:border-produto-yellowDark"
                type="text"
                id="rua"
                placeholder="Rua"
                {...register('rua', { required: true })}
              />
              <div className="flex w-full flex-wrap gap-3">
                <input
                  className="max-w-[200px] rounded border border-base-baseButton bg-base-baseInput p-3
                  text-sm leading-4 text-base-baseText outline-none focus:border-produto-yellowDark"
                  type="number"
                  id="numero"
                  placeholder="Número"
                  {...register('numero', { required: true })}
                />

                <input
                  className="grow rounded border border-base-baseButton bg-base-baseInput p-3
                  text-sm leading-4 text-base-baseText outline-none focus:border-produto-yellowDark"
                  type="text"
                  id="complemento"
                  placeholder="Complemento"
                  {...register('complemento', { required: false })}
                />
              </div>
              <div className="flex w-full flex-wrap gap-3">
                <input
                  className="max-w-[200px] rounded border border-base-baseButton bg-base-baseInput p-3
                  text-sm leading-4 text-base-baseText outline-none focus:border-produto-yellowDark lg:w-2/6"
                  type="text"
                  id="bairro"
                  placeholder="Bairro"
                  {...register('bairro', { required: true })}
                />

                <input
                  className="grow rounded border border-base-baseButton bg-base-baseInput p-3
                  text-sm leading-4 text-base-baseText outline-none focus:border-produto-yellowDark"
                  type="text"
                  id="cidade"
                  placeholder="Cidade"
                  {...register('cidade', { required: true })}
                />

                <input
                  className="rounded border border-base-baseButton bg-base-baseInput p-3
                  text-sm leading-4 text-base-baseText outline-none focus:border-produto-yellowDark"
                  type="text"
                  id="uf"
                  placeholder="UF"
                  {...register('uf', { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-start gap-2 bg-base-card p-10">
            <CurrencyDollar
              size={22}
              weight="regular"
              color="#8047F8"
              className="mt-[1px]"
            />
            <div>
              <div>
                <h2 className="text-base font-normal leading-5 text-base-baseSubtitle">
                  Pagamento
                </h2>
                <p className="text-sm font-normal leading-4 text-base-baseText">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>

              <Controller
                name="paymentOption"
                control={control}
                defaultValue="credito"
                render={({ field }) => (
                  <div className="mt-8 flex flex-wrap gap-2 rounded-md font-roboto">
                    <label
                      className={`flex min-w-[180px] cursor-pointer items-center gap-3 rounded-md border bg-base-baseButton p-3 text-xs uppercase leading-5 text-base-baseText transition-colors duration-300 ease-in-out hover:bg-base-radio ${
                        field.value === 'credito' ? 'border-produto-purple' : ''
                      }`}
                    >
                      <div>
                        <input
                          type="radio"
                          {...field}
                          value="credito"
                          className="hidden rounded border border-base-baseButton bg-base-baseInput
            p-3 outline-none focus:border-produto-yellowDark"
                        />
                        <CreditCard
                          size={22}
                          weight="regular"
                          color="#8047F8"
                        />
                      </div>
                      <span>Cartão de crédito</span>
                    </label>
                    <label
                      className={`flex min-w-[180px] cursor-pointer items-center gap-3 rounded-md border bg-base-baseButton p-3 text-xs uppercase leading-5 text-base-baseText transition-colors duration-300 ease-in-out hover:bg-base-radio ${
                        field.value === 'debito' ? 'border-produto-purple' : ''
                      }`}
                    >
                      <div>
                        <input
                          type="radio"
                          {...field}
                          value="debito"
                          className="hidden rounded border border-base-baseButton bg-base-baseInput
            p-3 outline-none focus:border-produto-yellowDark"
                        />
                        <Bank size={22} weight="regular" color="#8047F8" />
                      </div>
                      <span>Cartão de débito</span>
                    </label>
                    <label
                      className={`flex min-w-[180px] cursor-pointer items-center gap-3 rounded-md border bg-base-baseButton p-3 text-xs uppercase leading-5 text-base-baseText transition-colors duration-300 ease-in-out hover:bg-base-radio ${
                        field.value === 'dinheiro'
                          ? 'border-produto-purple'
                          : ''
                      }`}
                    >
                      <div>
                        <input
                          type="radio"
                          {...field}
                          value="dinheiro"
                          className="hidden rounded border border-base-baseButton bg-base-baseInput
            p-3 outline-none focus:border-produto-yellowDark"
                        />
                        <Money size={22} weight="regular" color="#8047F8" />
                      </div>
                      <span>Dinheiro</span>
                    </label>
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[540px]">
          <h1 className="mb-4 font-baloo text-lg font-bold leading-6 text-base-baseSubtitle">
            Cafés selecionados
          </h1>
          <div className="rounded-cardShop bg-base-card p-10">
            <div className="flex max-h-80 flex-col overflow-y-auto">
              {cart.map((item) => (
                <ShoppingCartCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantidade={item.quantidade}
                />
              ))}
            </div>
            <div className="flex w-full flex-col items-start gap-3 font-roboto">
              <div className="flex w-full items-start justify-between">
                <p className="text-sm leading-[18px] text-base-baseText">
                  Total de itens
                </p>
                <p className="text-base leading-5 text-base-baseText">
                  R$ {total.toFixed(2)}
                </p>
              </div>
              <div className="flex w-full items-start justify-between">
                <p className="text-sm leading-[18px] text-base-baseText">
                  Entrega
                </p>
                <p className="text-base leading-5 text-base-baseText">
                  R$ {frete.toFixed(2)}
                </p>
              </div>
              <div className="flex w-full items-start justify-between text-xl font-bold text-base-baseSubtitle">
                <p>Total</p>
                <p>R$ {(total + frete).toFixed(2)}</p>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-produto-yellow px-2 py-3 text-sm font-bold uppercase leading-6 text-white transition-colors duration-300 ease-in-out hover:bg-produto-yellowDark focus:outline-none focus:ring-2 focus:ring-produto-yellowDark focus:ring-offset-2"
            >
              Confirmar pedido
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
