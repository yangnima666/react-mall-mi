import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductProps {
  data: any
}
const initialState: ProductProps = {
  data: {}

}

export const fetchProductData = createAsyncThunk(
  'product/getProductData',
  async () => {
    const  {data}  = await axios.get('/api/products', {
      params: {
        categoryId: '100012',
        pageSize: 6
      }
    })
    console.log(data)
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
      state.data = action.payload
    },
    [fetchProductData.rejected.type]: (state, action) => {
      
    },
  }
})