import {CategoryType} from './category.type'
import {ImageType} from './image.type'

export type ProductType = {
  _id: string
  title: string
  brand: string
  body: string
  description: string
  price: number
  rating: number
  gallery: ImageType[]
  categories: CategoryType[]
  createdAt: string
  updatedAt: string
}
