import {createAsyncThunk} from '@reduxjs/toolkit'
import {$api} from '../../http'

// GET CATEGORIES
export const getCategories = createAsyncThunk('getCategories', async (_, thunkApi) => {
  try {
    const res = await $api.get('/categories')

    return thunkApi.fulfillWithValue(res.data.data.categories)
  } catch (error) {
    return thunkApi.rejectWithValue('categories not found')
  }
})

// GET CATEGORY
export const getCategory = createAsyncThunk('getCategory', async (_id: string, thunkApi) => {
  try {
    const res = await $api.get(`/categories/${_id}`)
    return thunkApi.fulfillWithValue(res.data.data.category)
  } catch (error) {
    return thunkApi.rejectWithValue('category not found')
  }
})
