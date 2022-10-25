import {ProductType} from '../../../types/product.type'

export interface ProductsResponseInterface {
  data: {
    products: {
      products: ProductType[]
      meta: {
        page: number
        lastPage: number
        total: number
      }
    }
  }
}
