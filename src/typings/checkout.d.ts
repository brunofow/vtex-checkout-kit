import { OrderForm } from './orderForm'

export interface CheckoutMethods {
  orderForm: OrderForm
  getOrderForm(expectedOrderFormSections?: string[]): Promise<OrderForm>
  sendAttachment(attachmentId: string, attachment: any, expectedOrderFormSections?: string[]): Promise<OrderForm>
  addToCart(
    items: Array<{ id: number; quantity: number; seller: string }>,
    expectedOrderFormSections?: string[],
    salesChannel?: number | string
  ): Promise<OrderForm>
  updateItems(
    items: Array<{ index: number; quantity: number; seller?: string }>,
    expectedOrderFormSections?: string[],
    splitItem?: boolean
  ): Promise<OrderForm>
  removeItems(
    items: Array<{ index: number; quantity: number }>,
    expectedOrderFormSections?: string[]
  ): Promise<OrderForm>
  removeAllItems(expectedOrderFormSections?: string[]): Promise<OrderForm>
  cloneItem(itemIndex: number, newItemsOptions?: any[], expectedOrderFormSections?: string[]): Promise<OrderForm>
  calculateShipping(address: { postalCode: string; country: string; [k: string]: any }): Promise<OrderForm>
  simulateShipping?(
    items: Array<{ id: number; quantity: number; seller: string }>,
    postalCode: string,
    country: string,
    salesChannel?: number | string
  ): Promise<{ logisticsInfo: any[] }>
  getAddressInformation(address: { postalCode: string; country: string }): Promise<any>
  getProfileByEmail(email: string, salesChannel?: number | string): Promise<OrderForm>
  removeAccountId(accountId: string, expectedOrderFormSections?: string[]): Promise<void>
  addDiscountCoupon(couponCode: string, expectedOrderFormSections?: string[]): Promise<OrderForm>
  removeDiscountCoupon(expectedOrderFormSections?: string[]): Promise<OrderForm>
  removeGiftRegistry(expectedOrderFormSections?: string[]): Promise<OrderForm>
  addOffering(offeringId: string | number, itemIndex: number, expectedOrderFormSections?: string[]): Promise<OrderForm>
  removeOffering(
    offeringId: string | number,
    itemIndex: number,
    expectedOrderFormSections?: string[]
  ): Promise<OrderForm>
  addItemAttachment(
    itemIndex: number,
    attachmentName: string,
    content: any,
    expectedOrderFormSections?: string[],
    splitItem?: boolean
  ): Promise<OrderForm>
}
