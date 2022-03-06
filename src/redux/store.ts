import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userSlice } from './login/slice'

import { productSlice } from './product/slice'
import { productInfoSlice } from './productInfo/slice'


const rootReducer = combineReducers({
  product: productSlice.reducer,
  productInfo:productInfoSlice.reducer,
  login:userSlice.reducer

})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export default store