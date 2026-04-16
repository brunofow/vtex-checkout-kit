import { CheckoutMethods } from './checkout'
import { OrderForm } from './orderForm'

declare global {
  interface Window {
    vtexjs: {
      checkout: CheckoutMethods
    }
  }

  interface CheckoutPage {
    orderForm: OrderForm
  }
}
