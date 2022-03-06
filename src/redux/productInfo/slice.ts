import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface ProductInfoProps {
  data: any
}
const initialState: ProductInfoProps = {
  data: {}
}

export const getProductInfo = createAsyncThunk(
  'productInfo/getProductInfo',
  async (productId:string) => {
    const { data } = await axios.get(`/api/products/${productId}`)
    
    return data
  }
)

export const productInfoSlice = createSlice({
  name: 'productInfo',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductInfo.pending.type]: (state) => {

    },
    [getProductInfo.fulfilled.type]: (state, action) => {
      state.data = action.payload.data
    },
    [getProductInfo.rejected.type]: (state, action) => {

    }
  }
})