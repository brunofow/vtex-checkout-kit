import { waitForElement } from '@/utils/waitForElement'

export const openCouponInput = async () => {
  await waitForElement('.link-coupon-add')

  $('.link-coupon-add').trigger('click')
}
