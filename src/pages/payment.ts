import { pageWrapper } from '@/utils/pageWrapper'
import { customSummary } from './cart/customSummary'
import { triggerLoading } from './cart/triggerLoading'

export const payment = pageWrapper('#/payment', () => {
  $(window).on('orderFormUpdated.vtex', (_, orderForm) => {
    customSummary(orderForm)
    triggerLoading()
  })
})
