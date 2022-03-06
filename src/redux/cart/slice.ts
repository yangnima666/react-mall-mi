import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface Props {
  list:any
  sum:number,
  selectedAll:boolean,
  quantity:number,
  cartTotalPrice:number
}

const initialState:Props = {
  list:[],
  sum:0,
  selectedAll:false,
  quantity:0,
  cartTotalPrice:0
}
//获取
export const getCart = createAsyncThunk(
  'cart/getCart',
  async()=> {
   const {data} =  await axios.get('/api/carts')
   return data
  }
)
//添加
export const addCart = createAsyncThunk(
  'cart/addCart',
  async(paramat: {
    productId:string,
    selected:boolean
  })=> {
   const {data} =  await axios.post('/api/carts',{
    productId:paramat.productId,
     selected:paramat.selected
   })
   console.log("data",data)
   return data
  }
)
//更新
export const putCart = createAsyncThunk(
  'cart/putCart',
  async(id:string)=> {
   const {data} =  await axios.put(`/api/carts${id}`)
   return data
  }
)
//删除
export const deleteCart = createAsyncThunk(
  'cart/deleteCart',
  async(productId:number)=> {
   const {data} =  await axios.delete(`/api/carts/${productId}`)
   return data
  }
)
//全选
export const checkAllCart = createAsyncThunk(
  'cart/checkAllCart',
  async()=> {
   const {data} =  await axios.put(`/api/carts/selectAll`)
   return data
  }
)
//取消全选
export const unCheckAllCart = createAsyncThunk(
  'cart/unCheckAllCart',
  async()=> {
   const {data} =  await axios.put(`/api/carts/unSelectAll`)
   return data
  }
)
//获取总数
export const getCartSum = createAsyncThunk(
  'cart/unCheckAllCart',
  async()=> {
   const {data} =  await axios.get(`/api/carts/products/sum`)
   return data
  }
)

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{},
  extraReducers:{
    //获取
    [getCart.pending.type]: (state) => {
      
    },
    [getCart.fulfilled.type]: (state, action) => {
      state.list = action.payload.data.cartProductVoList;
      state.cartTotalPrice = action.payload.data.cartTotalPrice
      
    },
    [getCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    },
    //添加
    [addCart.pending.type]: (state) => {
      
    },
    [addCart.fulfilled.type]: (state, action) => {
      state.list = action.payload.data.cartProductVoList;
      state.cartTotalPrice = action.payload.data.cartTotalPrice
    },
    [addCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    },
    //更新
    // [putCart.pending.type]: (state) => {
      
    // },
    // [putCart.fulfilled.type]: (state, action) => {
    //   state.list = action.payload.data.cartProductVoList;
      
    // },
    // [putCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    // },
    // //删除
    [deleteCart.pending.type]: (state) => {
      
    },
    [deleteCart.fulfilled.type]: (state, action) => {
      state.list = action.payload.data.cartProductVoList;
      state.cartTotalPrice = action.payload.data.cartTotalPrice
    },
    [deleteCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    },
    // //全选
    // [checkAllCart.pending.type]: (state) => {
      
    // },
    // [checkAllCart.fulfilled.type]: (state, action) => {
    //   state.list = action.payload.list;
      
    // },
    // [checkAllCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    // },
    // //取消全选
    // [unCheckAllCart.pending.type]: (state) => {
      
    // },
    // [unCheckAllCart.fulfilled.type]: (state, action) => {
    //   state.list = action.payload.list;
      
    // },
    // [unCheckAllCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    // },
    // //获取总数
    // [getCartSum.pending.type]: (state) => {
      
    // },
    // [getCartSum.fulfilled.type]: (state, action) => {
    //   state.sum = action.payload;
      
    // },
    // [getCartSum.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    // },
  }
})