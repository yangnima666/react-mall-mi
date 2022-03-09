import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductProps {
  list: any,
  id:number
  
}
const initialState: ProductProps = {
  list: [],
  id:0

}

export const fetchProductData = createAsyncThunk(
  'product/getProductData',
  async (length: number) => {
    const { data } = await axios.get('/api/products', {
      params: {
        categoryId: '100012',
        pageSize: length
      }
    })

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
      state.id = action.payload.data.list.id
      
    },
    [fetchProductData.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
    },
  }
})