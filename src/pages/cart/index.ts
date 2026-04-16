import { pageWrapper } from '@/utils/pageWrapper'
import { tableStructure } from './tableStructure'
import { openCouponInput } from './openCouponInput'
import { customSummary } from './customSummary'
import { triggerLoading } from './triggerLoading'

export const cart = pageWrapper('#/cart', async () => {
  tableStructure()
  openCouponInput()

  $(window).on('orderFormUpdated.vtex', (_, orderForm) => {
    openCouponInput()
    customSummary(orderForm)
    triggerLoading()
  })
})
