import {ProductType} from '../../../types/product.type'

export interface ProductPagination {
  products: ProductType[]
  meta: {
    page: number
    lastPage: number
    total: number
  }
}
