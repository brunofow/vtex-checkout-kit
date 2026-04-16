import type { OrderForm } from '@/typings/orderForm'

export const getOrderForm = async (): Promise<OrderForm | null> => {
  if (!window.vtexjs?.checkout) {
    return null
  }

  try {
    if (window.vtexjs.checkout.orderForm) {
      return window.vtexjs.checkout.orderForm
    }
    const orderForm = await window.vtexjs.checkout.getOrderForm()
    return orderForm
  } catch (err) {
    console.error('>>> Erro ao obter o OrderForm:', err)
    return null
  }
}
