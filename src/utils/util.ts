import {ProductType} from '../types/product.type'

export const inStore = (data: ProductType[], _id: string) => {
  if (data.find((i) => i._id === _id)) return true
  return false
}
