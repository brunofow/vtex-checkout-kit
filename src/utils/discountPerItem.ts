import { OrderFormItem } from '@/typings/orderForm'

export const priceWithDiscount = (item: OrderFormItem) => {
  const { priceDefinition, quantity, unitMultiplier } = item

  const multiplierFactor = 1 / unitMultiplier

  const fractionPrice = priceDefinition.total / quantity

  const result = fractionPrice * multiplierFactor

  return Math.ceil(result)
}
