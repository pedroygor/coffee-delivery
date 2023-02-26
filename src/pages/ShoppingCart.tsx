import ShoppingCartContext from '../context/ShoppingCartContext'
import { IFormInput } from 'interfaces/IFormInput'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useContext } from 'react'

export const ShoppingCart = () => {
  const { register, handleSubmit, control } = useForm<IFormInput>()
  const { cart, removeCoffee } = useContext(ShoppingCartContext)

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <div className="mx-auto flex flex-col items-start justify-start sm:w-11/12 xl:w-4/5">
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  type="text"
                  id="numero"
                  placeholder="Número"
                  {...register('numero', { required: true, pattern: /\d+/g })}
                />

                <input
                  className="grow rounded border border-base-baseButton bg-base-baseInput p-3
                  text-sm leading-4 text-base-baseText outline-none focus:border-produto-yellowDark"
                  type="text"
                  id="complemento"
                  placeholder="Complemento"
                  {...register('complemento')}
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
            <button type="submit">Finalizar pedido</button>
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
                    <label className="flex min-w-[180px] cursor-pointer items-center gap-3 rounded-md bg-base-baseButton p-3 text-xs uppercase leading-5 text-base-baseText transition-colors duration-300 ease-in-out hover:bg-base-radio">
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
                    <label className="flex min-w-[180px] cursor-pointer items-center gap-3 rounded-md bg-base-baseButton p-3 text-xs uppercase leading-5 text-base-baseText transition-colors duration-300 ease-in-out hover:bg-base-radio">
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
                    <label className="flex min-w-[180px] cursor-pointer items-center gap-3 rounded-md bg-base-baseButton p-3 text-xs uppercase leading-5 text-base-baseText transition-colors duration-300 ease-in-out hover:bg-base-radio">
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

        <div>
          <h1 className="mb-4 font-baloo text-lg font-bold leading-6 text-base-baseSubtitle">
            Cafés selecionados
          </h1>
          <div className="flex flex-col">
            {cart.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h2 className="text-sm font-medium leading-5 text-base-baseSubtitle">
                      {item.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}
