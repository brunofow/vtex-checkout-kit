import { pageWrapper } from '@/utils/pageWrapper'
import { waitForElement } from '@/utils/waitForElement'
import { customDatePicker } from './customDatePicker'
import { customSummary } from '../cart/customSummary'
import { triggerLoading } from '../cart/triggerLoading'
import { customShippingTerms } from './customShippingTerms'

export const shipping = pageWrapper('#/shipping', async () => {
  const openDatePicker = async () => {
    const datePicker = await waitForElement(
      '.vtex-omnishipping-1-x-dateLink',
      5000
    )
    if (datePicker) {
      $(datePicker).trigger('click')
    }
  }

  openDatePicker()
  customDatePicker()
  customShippingTerms()

  $(window).on('orderFormUpdated.vtex', (_, orderForm) => {
    customSummary(orderForm)
    triggerLoading()
    if ($('.vtex-omnishipping-1-x-selectedDate').text()?.length) return
    openDatePicker()
  })

  $(window).on('hashchange', async () => {
    openDatePicker()
    customDatePicker()
    customShippingTerms()
  })
})
