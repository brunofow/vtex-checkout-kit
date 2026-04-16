import { sleep } from '@/utils/sleep'
import { waitForElement } from '@/utils/waitForElement'

export const customDatePicker = async () => {
  if (location.hash !== '#/shipping') return
  await waitForElement('.step.shipping-data .vtex-omnishipping-1-x-addressFormPart1', 6000)

  $('#ship-postalCode').on('input', async function () {
    const digits = String($(this).val()).replace(/[-.,]/g, '').length

    if (digits === 8) {
      await sleep(1000)
      await customDatePicker()
      $('.vtex-omnishipping-1-x-dateLink').trigger('click')
      $('.vtex-omnishipping-1-x-dateLinkModify').trigger('click')
    }
  })

  $('#btn-go-to-payment').on('click', () => {
    $('.vtex-omnishipping-1-x-dateLink').trigger('click')
  })

  const parent = $('.vtex-omnishipping-1-x-scheduledDelivery').parent()

  if (!parent.hasClass('dh-schedule-delivery')) {
    $(parent).addClass('dh-schedule-delivery')
  }

  $('.vtex-omnishipping-1-x-dateLinkModify').text('Alterar data de entrega')
}
