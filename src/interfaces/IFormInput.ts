export type PaymentOption = 'credito' | 'debito' | 'dinheiro'

export interface IFormInput {
  cep: string
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentOption: PaymentOption
}
