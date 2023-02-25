import { MapPin } from 'phosphor-react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  cep: string
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export const ShoppingCart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

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
              <MapPin size={22} color="#C47F17" className="mt-[1px]" />
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
              outline-none focus:border-produto-yellowDark"
                type="text"
                id="cep"
                placeholder="CEP"
                {...register('cep', { required: true })}
              />

              <input
                className="w-full rounded border border-base-baseButton bg-base-baseInput p-3
            outline-none focus:border-produto-yellowDark"
                type="text"
                id="rua"
                placeholder="Rua"
                {...register('rua', { required: true })}
              />
              <div className="flex w-full flex-wrap gap-3">
                <input
                  className="max-w-[200px] rounded border border-base-baseButton bg-base-baseInput p-3 outline-none
                focus:border-produto-yellowDark"
                  type="text"
                  id="numero"
                  placeholder="Número"
                  {...register('numero', { required: true, pattern: /\d+/g })}
                />

                <input
                  className="grow rounded border border-base-baseButton bg-base-baseInput p-3
                outline-none focus:border-produto-yellowDark"
                  type="text"
                  id="complemento"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </div>
              <div className="flex w-full flex-wrap gap-3">
                <input
                  className="max-w-[200px] rounded border border-base-baseButton bg-base-baseInput p-3 outline-none
                focus:border-produto-yellowDark lg:w-2/6"
                  type="text"
                  id="bairro"
                  placeholder="Bairro"
                  {...register('bairro', { required: true })}
                />

                <input
                  className="grow rounded border border-base-baseButton bg-base-baseInput p-3
                outline-none focus:border-produto-yellowDark"
                  type="text"
                  id="cidade"
                  placeholder="Cidade"
                  {...register('cidade', { required: true })}
                />

                <input
                  className="rounded border border-base-baseButton bg-base-baseInput p-3 outline-none
                focus:border-produto-yellowDark"
                  type="text"
                  id="uf"
                  placeholder="UF"
                  {...register('uf', { required: true })}
                />
              </div>
            </div>
            <button type="submit">Finalizar pedido</button>
          </div>
        </div>
      </form>
    </div>
  )
}
