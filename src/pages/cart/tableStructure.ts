import { OrderForm } from '@/typings/orderForm'
import { applyQuantityMask } from '@/utils/applyQuantityMask'
import { priceWithDiscount } from '@/utils/discountPerItem'
import { formatPrice } from '@/utils/formatPrice'
import { getOrderForm } from '@/utils/getOrderForm'
import { waitForElement } from '@/utils/waitForElement'

export const tableStructure = async () => {
  if (location.hash !== '#/cart') return

  await waitForElement('.cart-items tbody')

  setTimeout(() => {
    updateTable()
  }, 500)

  const observer = new MutationObserver(async () => {
    $('th.product-price').text('Preço unitário')

    updateTable()
  })

  observer.observe(document.querySelector('.cart-items tbody') as Node, {
    childList: true,
  })
}

const updateTable = async () => {
  const parentNode = $('tr.product-item')
  if (parentNode.has('.item-unit-label').length) {
    let orderForm: OrderForm

    const response = await getOrderForm()

    if (response) {
      orderForm = response
    } else {
      orderForm = await window.vtexjs.checkout.getOrderForm()
    }

    $('.cart-items tr.product-item .item-unit-label').each(
      (index, unitLabel) => {
        const row = $(unitLabel).closest('tr')
        const maskType = unitLabel.textContent?.length ? 'kg' : 'un'

        const input = row.find('td.quantity input')
        input.removeAttr('data-bind')
        input.on('focus', () => input.trigger('select'))
        input.on('click', () => input.trigger('select'))

        try {
          applyQuantityMask(input, orderForm, index, maskType)
        } catch (error) {
          input.val(unitLabel.textContent)
        }

        row.find('.item-quantity-change-increment').on('click', () => {
          applyQuantityMask(input, orderForm, index, maskType, 1)
        })

        row.find('.item-quantity-change-decrement').on('click', () => {
          applyQuantityMask(input, orderForm, index, maskType, -1)
        })

        // Itens por kg
        if (maskType === 'kg') {
          const {
            listPrice,
            price,
            priceDefinition,
            priceTags,
          } = orderForm.items[index]

          row.find('td.product-price .new-product-real-price-per-unit').remove()

          if (listPrice === price) {
            row.find('.new-product-price').text(`${formatPrice(price)} Kg`)
            row.find('td.product-price .list-price').hide()
            row.find('td.product-price .new-product-price-label').hide()
          }

          if (priceTags?.length && listPrice !== priceDefinition.total) {
            row
              .find('.new-product-price')
              .text(
                `${formatPrice(priceWithDiscount(orderForm.items[index]))} Kg`
              )
            row.find('td.product-price .list-price').show()
            row.find('td.product-price .new-product-price-label').show()
          }
        } else {
          // Itens por UN
          const priceRow = row.find('td.product-price .new-product-price')
          if (!priceRow.text().includes('Un')) {
            priceRow.append(' Un')
          }
        }
      }
    )
  }
}
