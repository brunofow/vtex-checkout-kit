export const customShippingTerms = () => {
  if ($('.custom-shipping-terms').length) return
  const container = $(`<div></div>`).addClass('custom-shipping-terms')

  const checkbox = $('<input />').attr({
    type: 'checkbox',
    class: 'custom-checkbox',
  })

  const label = $(`<label>
      <span>Li e entendo que as datas de entrega da assinatura podem sofrer alterações em casos de feriados ou pela data de entrega do pedido inicial</span>
    </label>`).addClass('custom-label')

  label.prepend(checkbox)
  container.append(label)

  container.insertAfter('.vtex-omnishipping-1-x-deliveryGroup')

  const buttonOverlay = $('<div></div>').addClass('custom-button-overlay')

  $('.vtex-omnishipping-1-x-submitPaymentButton').append(buttonOverlay)

  $('.custom-button-overlay').on('click', () => {
    $('.custom-shipping-terms').addClass('error')
  })

  $('.custom-shipping-terms .custom-checkbox').on('change', () => {
    if (checkbox.is(':checked')) {
      $('.custom-shipping-terms').removeClass('error')
      buttonOverlay.hide()
      return
    }

    buttonOverlay.show()
  })
}
