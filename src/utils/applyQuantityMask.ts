import { OrderForm } from '@/typings/orderForm'

type MaskType = 'un' | 'kg'

export const applyQuantityMask = (
  input: JQuery<HTMLElement>,
  orderForm: OrderForm,
  itemIndex: number,
  maskType: MaskType = 'kg',
  modifier: number = 0
) => {
  try {
    if (!input) throw new Error('Input inválido ou não encontrado.')
    if (!orderForm?.items?.length) throw new Error('OrderForm sem itens.')

    const item = orderForm.items[itemIndex]
    if (!item) throw new Error(`>>> Item no índice ${itemIndex} não encontrado.`)

    setInputMask(input, item.quantity + modifier, item.unitMultiplier, maskType)

    input.on('focus', function () {
      try {
        $(this).val(item.quantity)
      } catch (err) {
        throw new Error(`>>> Erro ao restaurar quantidade original`)
      }
    })

    input.on('blur', function () {
      setInputMask($(this), item.quantity, item.unitMultiplier, maskType)
    })
  } catch (err) {
    console.error('applyQuantityMask error:', err)
    throw err
  }
}

const setInputMask = (input: JQuery<HTMLElement>, qty: number, unitMultiplier: number, type: MaskType = 'kg') => {
  try {
    if (isNaN(qty)) throw new Error('Valor numérico inválido no input.')

    const result = qty * unitMultiplier
    if (isNaN(result)) throw new Error('Falha ao calcular resultado com o unitMultiplier.')

    if (type === 'kg') {
      input.val(result.toFixed(2).replace('.', ',') + ' kg')
    } else {
      input.val(result + ' Un')
    }
  } catch (err) {
    throw new Error(`>>> Erro ao aplicar máscara no blur: ${err}`)
  }
}
