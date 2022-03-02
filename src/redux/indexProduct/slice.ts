import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


interface Props {
  data: any
}
const initialState: Props = {
  data: null
}

export const getIndexProduct = createAsyncThunk(
  'indexProductData/getIndexProductData',
  async () => {
    const { data } = await axios.get('/api/products', {
      params: {
        categoryId: 100012,
        pageSize: 14
      }
    })

    return data
  }
)


export const indexProductSlice = createSlice({
  name: 'indexProductData',
  initialState,
  reducers: {},
  extraReducers: {
    [getIndexProduct.fulfilled.type]: (state, action) => {
      state.data = action.payload
    },
  }
})
