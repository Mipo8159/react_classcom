import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CategoryType} from '../../types/category.type'
import {getCategories, getCategory} from './category.action'
import {CategoryState} from './types/category.state'

const initialState: CategoryState = {
  categories: [] as CategoryType[],
  category: {} as CategoryType,
  categoryLoading: false,
  categoryError: null,
}

const categoryReducer = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    // GET CATEGORIES
    [getCategories.pending.type]: (state: CategoryState) => {
      state.categoryLoading = true
    },
    [getCategories.fulfilled.type]: (
      state: CategoryState,
      action: PayloadAction<CategoryType[]>
    ) => {
      state.categoryLoading = false
      state.categoryError = null
      state.categories = action.payload
    },
    [getCategories.rejected.type]: (
      state: CategoryState,
      action: PayloadAction<string>
    ) => {
      state.categoryLoading = false
      state.categoryError = action.payload
    },

    // GET CATEGORY
    [getCategory.pending.type]: (state: CategoryState) => {
      state.categoryLoading = true
    },
    [getCategory.fulfilled.type]: (
      state: CategoryState,
      action: PayloadAction<CategoryType>
    ) => {
      state.categoryLoading = false
      state.categoryError = null
      state.category = action.payload
    },
    [getCategory.rejected.type]: (
      state: CategoryState,
      action: PayloadAction<string>
    ) => {
      state.categoryLoading = false
      state.categoryError = action.payload
    },
  },
})

export default categoryReducer.reducer
