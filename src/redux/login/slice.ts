import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


interface Props {
  data:any,
  status:number
}
const initialState:Props = {
  data:{},
  status:1
}
export const login = createAsyncThunk(
  'login/loginUser',
  async (paramat: {
    username: string,
    password: string,
  }) => {
    const  {data}  = await axios.post('/api/user/login', {
      username: paramat.username,
      password: paramat.password

    })
    
    return data
  }
)

export const logout = createAsyncThunk(
  'logout/logoutUser',
  async()=> {
   const {data} =  await axios.post('/api/user/logout')
   return data
  }
)

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{},
  extraReducers:{
    [login.pending.type]: (state) => {
      
    },
    [login.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.status = action.payload.status
    },
    [login.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    },
    [logout.pending.type]: (state) => {
      
    },
    [logout.fulfilled.type]: (state, action) => {
      state.data = {}
      state.status = 1
    },
    [logout.rejected.type]: (state, action: PayloadAction<string | null>) => {
      
      
    },
  }
})