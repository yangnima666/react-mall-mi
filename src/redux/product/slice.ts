import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductProps {
  list: any
}
const initialState: ProductProps = {
  list: []

}

export const fetchProductData = createAsyncThunk(
  'product/getProductData',
  async (length:number) => {
    const  {data}  = await axios.get('/api/products', {
      params: {
        categoryId: '100012',
        pageSize: length
      }
    })
    console.log('data:',data)
    return data
    
  }
)
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchProductData.pending.type]: (state) => {
      
    },
    [fetchProductData.fulfilled.type]: (state, action) => {
      state.list = action.payload.data.list
    },
    [fetchProductData.rejected.type]: (state, action) => {

    },
  }
})