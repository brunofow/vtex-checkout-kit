import { cleanCustomElements } from './cleanNewElements'

export const pageWrapper = (hash: string, pageFn: () => void) => {
  const initPage = () => {
    if (location.hash === hash) {
      pageFn()
    }
  }

  initPage()

  $(window).on('hashchange', () => {
    cleanCustomElements(hash)
    initPage()
  })
}
