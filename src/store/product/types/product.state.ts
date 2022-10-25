import {ProductType} from '../../../types/product.type'
import {ProductPagination} from './productPagination.interface'

export interface ProductState {
  productPagination: ProductPagination
  product: ProductType
  productLoading: boolean
  productError: any
}
