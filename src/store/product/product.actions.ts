import {createAsyncThunk} from '@reduxjs/toolkit'
import {$api} from '../../http'
import {ProductsRequestInterface} from './request/productsRequest.interface'
import {ProductsResponseInterface} from './response/productsResponse.interface'

// GET PRODUCTS
export const getProducts = createAsyncThunk(
  'getProducts',
  async (request: ProductsRequestInterface, thunkApi) => {
    try {
      const res = await $api.get<ProductsResponseInterface>('/products', {
        params: {
          page: request.page,
          limit: request.limit,
        },
      })

      return thunkApi.fulfillWithValue(res.data.data.products)
    } catch (error) {
      return thunkApi.rejectWithValue('products not found')
    }
  }
)

// GET PRODUCT
export const getProduct = createAsyncThunk(
  'getProduct',
  async (_id: string, thunkApi) => {
    try {
      const res = await $api.get(`/products/${_id}`)
      return thunkApi.fulfillWithValue(res.data)
    } catch (error) {
      thunkApi.rejectWithValue('product not found')
    }
  }
)
