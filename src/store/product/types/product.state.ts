import {ProductType} from '../../../types/product.type'
import {ProductPagination} from './productPagination.interface'

export interface ProductState {
  productPagination: ProductPagination
  product: ProductType
  searchProducts: ProductType[]
  productLoading: boolean
  productError: any
}
