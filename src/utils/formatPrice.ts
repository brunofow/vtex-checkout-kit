export function formatPrice(value: number | undefined, isInCents = true) {
  if (value === undefined) return ''

  const amount = isInCents ? value / 100 : value

  return amount.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })
}
