import {CategoryType} from '../../../types/category.type'

export interface CategoryState {
  categories: CategoryType[]
  category: CategoryType
  categoryLoading: boolean
  categoryError: any
}
