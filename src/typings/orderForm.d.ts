export interface OrderForm {
  orderFormId: string
  salesChannel: string
  loggedIn: boolean
  isCheckedIn: boolean
  storeId: null
  checkedInPickupPointId: null
  allowManualPrice: boolean
  canEditData: boolean
  userProfileId: null
  userType: null
  ignoreProfileData: boolean
  value: number
  messages: any[]
  items: OrderFormItem[]
  selectableGifts: any[]
  totalizers: Totalizer[]
  shippingData: ShippingData
  clientProfileData: ClientProfileData
  paymentData: PaymentData
  marketingData: null
  sellers: Seller[]
  clientPreferencesData: ClientPreferencesData
  commercialConditionData: null
  storePreferencesData: StorePreferencesData
  giftRegistryData: null
  openTextField: null
  invoiceData: null
  customData: null | CustomData
  itemMetadata: ItemMetadata
  hooksData: null
  ratesAndBenefitsData: RatesAndBenefitsData
  subscriptionData: {
    subscriptions: SubscriptionsData[]
  }
  itemsOrdination: null
}
type ClientProfileData = {
  corporateDocument: string
  corporateName: string
  corporatePhone: string
  customerClass: string
  document: string
  documentType: string
  email: string
  firstName: string
  isCorporate: false
  lastName: string
  phone: string
  profileCompleteOnLoading: false
  profileErrorOnLoading: false
  stateInscription: string
  tradeName: string
}

type CustomApps = {
  fields: {
    data: string
    package: string
  }
  id: string
  major: number
}

type CustomData = {
  customApps: CustomApps[]
}

interface ClientPreferencesData {
  locale: string
  optinNewsLetter: null
}

interface ItemMetadata {
  items: ItemMetadataItem[]
}

interface ItemMetadataItem {
  id: string
  seller: string
  name: string
  skuName: string
  productId: string
  refId: string
  ean: string
  imageUrl: string
  detailUrl: string
  assemblyOptions: AssemblyOption[]
}

interface AssemblyOption {
  id: string
  name: string
  required: boolean
  inputValues: Schema
  composition: Composition | null
}

interface Composition {
  minQuantity: number
  maxQuantity: number
  items: CompositionItem[]
}

interface CompositionItem {
  id: string
  seller: string
  minQuantity: number
  maxQuantity: number
  initialQuantity: number
  priceTable: string
}

interface Schema {
  'Line 1'?: Line
  'Line 2'?: Line
  'Line 3'?: Line
  'Line 4'?: Line
}

interface Line {
  maximumNumberOfCharacters: number
  domain: any[]
}

export interface OrderFormItem {
  uniqueId: string
  id: string
  productId: string
  productRefId: string
  refId: string
  ean: string
  name: string
  skuName: string
  modalType: null
  parentItemIndex: number | null
  parentAssemblyBinding: null | string
  assemblies: any[]
  priceValidUntil: string
  tax: number
  price: number
  listPrice: number
  manualPrice: null
  sellingPrice: number
  rewardValue: number
  isGift: boolean
  additionalInfo: AdditionalInfo
  preSaleDate: null
  productCategoryIds: string
  productCategories: { [key: string]: string }
  quantity: number
  seller: string
  sellerChain: string[]
  imageUrl: string
  detailUrl: string
  components: any[]
  bundleItems: any[]
  attachments: any[]
  attachmentOfferings: AttachmentOffering[]
  offerings: any[]
  priceDefinition: {
    calculatedSellingPrice: number
    reason: any
    sellingPrices: {
      quantity: number
      value: number
    }[]
    total: number
  }
  priceTags: {
    identifier: any
    isPercentual: boolean
    name: string
    ratesAndBenefitsIdentifier: any
    rawValue: number
    value: number
  }[]
  availability: string
  measurementUnit: string
  unitMultiplier: number
}

interface AdditionalInfo {
  brandName: string
  brandId: string
  offeringInfo: null
  offeringType: null
  offeringTypeId: null
}

interface AttachmentOffering {
  name: string
  required: boolean
  schema: Schema
}

interface PaymentData {
  installmentOptions: InstallmentOption[]
  paymentSystems: PaymentSystem[]
  payments: Payment[]
  giftCards: any[]
  giftCardMessages: any[]
  availableAccounts: any[]
  availableTokens: any[]
}

interface InstallmentOption {
  paymentSystem: string
  bin: null
  paymentName: null
  paymentGroupName: null
  value: number
  installments: Installment[]
}

interface Installment {
  count: number
  hasInterestRate: boolean
  interestRate: number
  value: number
  total: number
  sellerMerchantInstallments?: Installment[]
  id?: string
}

interface PaymentSystem {
  id: number
  name: string
  groupName: string
  validator: Validator
  stringId: string
  template: string
  requiresDocument: boolean
  isCustom: boolean
  description: null | string
  requiresAuthentication: boolean
  dueDate: string
  availablePayments: null
}

interface Validator {
  regex: null | string
  mask: null | string
  cardCodeRegex: null | string
  cardCodeMask: null | string
  weights: number[] | null
  useCvv: boolean
  useExpirationDate: boolean
  useCardHolderName: boolean
  useBillingAddress: boolean
}

interface Payment {
  paymentSystem: string
  bin: null
  accountId: null
  tokenId: null
  installments: null
  referenceValue: number
  value: number
  merchantSellerPayments: MerchantSellerPayment[]
}

interface MerchantSellerPayment {
  id: string
  installments: null
  referenceValue: number
  value: number
  interestRate: null
  installmentValue: number
}

interface RatesAndBenefitsData {
  rateAndBenefitsIdentifiers: any[]
  teaser: any[]
}

interface Seller {
  id: string
  name: string
  logo: string
}

interface ShippingData {
  address: any
  logisticsInfo: LogisticsInfo[]
  selectedAddresses: any[]
  availableAddresses: any[]
  pickupPoints: any[]
}

interface LogisticsInfo {
  itemIndex: number
  selectedSla: null
  selectedDeliveryChannel: string
  addressId: null
  slas: any[]
  shipsTo: string[]
  itemId: string
  deliveryChannels: any[]
}

interface StorePreferencesData {
  countryCode: string
  saveUserData: boolean
  timeZone: string
  currencyCode: string
  currencyLocale: number
  currencySymbol: string
  currencyFormatInfo: CurrencyFormatInfo
}

interface CurrencyFormatInfo {
  currencyDecimalDigits: number
  currencyDecimalSeparator: string
  currencyGroupSeparator: string
  currencyGroupSize: number
  startsWithCurrencySymbol: boolean
}

interface Totalizer {
  id: string
  name: string
  value: number
}

interface SubscriptionsData {
  itemIndex: number
  plan: {
    frequency: {
      periodicity: string
      interval: number
    }
  }
}
