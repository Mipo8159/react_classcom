import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductType} from '../../types/product.type'
import {getProduct, getProducts, searchProducts} from './product.actions'
import {ProductState} from './types/product.state'
import {ProductPagination} from './types/productPagination.interface'

const initialState: ProductState = {
  productPagination: {} as ProductPagination,
  product: {} as ProductType,
  productLoading: false,
  searchProducts: [],
  productError: null,
}

const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    // GET PRODUCTS (PAGINATION)
    [getProducts.pending.type]: (state: ProductState) => {
      state.productLoading = true
    },
    [getProducts.fulfilled.type]: (state: ProductState, action: PayloadAction<ProductPagination>) => {
      state.productLoading = false
      state.productError = false
      state.productPagination = action.payload
    },
    [getProducts.rejected.type]: (state: ProductState, action: PayloadAction<string>) => {
      state.productLoading = false
      state.productError = action.payload
    },

    // GET PRODUCT
    [getProduct.pending.type]: (state: ProductState) => {
      state.productLoading = true
    },
    [getProduct.fulfilled.type]: (state: ProductState, action: PayloadAction<ProductType>) => {
      state.productLoading = false
      state.productError = false
      state.product = action.payload
    },
    [getProduct.rejected.type]: (state: ProductState, action: PayloadAction<string>) => {
      state.productLoading = false
      state.productError = action.payload
    },

    // SEARCH PRODUCT
    [searchProducts.pending.type]: (state: ProductState) => {
      state.productLoading = true
    },
    [searchProducts.fulfilled.type]: (state: ProductState, action: PayloadAction<ProductType[]>) => {
      state.productLoading = false
      state.productError = false
      state.searchProducts = action.payload
    },
    [searchProducts.rejected.type]: (state: ProductState, action: PayloadAction<string>) => {
      state.productLoading = false
      state.productError = action.payload
    },
  },
})

export default productReducer.reducer
