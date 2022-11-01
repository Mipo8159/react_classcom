import {ProductType} from '../../../types/product.type'

export type CartState = {
  isOpen: boolean
  cart: ProductType[]
  total: number
}
