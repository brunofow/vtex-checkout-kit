export function waitForElement(selector: string, timeout = 3000): Promise<Element | null> {
  return new Promise((resolve) => {
    const element = document.querySelector(selector)
    if (element) {
      return resolve(element)
    }

    const observer = new MutationObserver((_, obs) => {
      const el = document.querySelector(selector)
      if (el) {
        obs.disconnect()
        resolve(el)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    setTimeout(() => {
      observer.disconnect()
      resolve(null)
    }, timeout)
  })
}
