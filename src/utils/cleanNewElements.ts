export const cleanCustomElements = (hash: string) => {
  if (hash !== '#/shipping') {
    $('.custom-shipping-terms').remove()
  }
}
