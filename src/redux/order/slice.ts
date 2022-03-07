import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


interface Props {
  orderList: any,
  shippingId: number,
  orderNo: number,
  list: any
}
const initialState: Props = {
  orderList: [],//创建订单列表
  shippingId: 0,
  orderNo: 0,//订单号
  list: []//订单列表
}

//提交订单
export const AddOrder = createAsyncThunk(
  'order/AddOrder',
  async (shippingId: number) => {
    const { data } = await axios.post(`/api/orders`, { shippingId })
    return data
  }
)
//获取列表
// export const getOrder = createAsyncThunk(
//   'order/getOrder',
//   async (pageNum: number) => {
//     const { data } = await axios.get('/api/orders', {
//       params: {
//         pageSize: 10,
//         pageNum: pageNum
//       }

//     })
//     return data
//   }
// )

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: {
    //添加订单
    [AddOrder.pending.type]: (state) => {

    },
    [AddOrder.fulfilled.type]: (state, action) => {
      state.orderList = action.payload.data.orderItemVoList;
      state.shippingId = action.payload.data.shippingId
      state.orderNo = action.payload.data.orderNo;

    },
    [AddOrder.rejected.type]: (state, action: PayloadAction<string | null>) => {


    },
    //获取订单列表
    // [getOrder.pending.type]: (state) => {

    // },
    // [getOrder.fulfilled.type]: (state, action) => {
    //   state.list = action.payload.data.list


    // },
    // [getOrder.rejected.type]: (state, action: PayloadAction<string | null>) => {


    // },
  }
})