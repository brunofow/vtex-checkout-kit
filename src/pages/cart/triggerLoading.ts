import { sleep } from '@/utils/sleep'

export const triggerLoading = async () => {
  const table = $('.summary-totalizers table')
  table.removeClass('done')

  await sleep(2000)

  if (!table.hasClass('done')) {
    table.addClass('done')
  }
}
