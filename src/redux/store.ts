import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart/slice'
import { userSlice } from './login/slice'
import { persistStore, persistReducer } from 'redux-persist'
import { productSlice } from './product/slice'
import { productInfoSlice } from './productInfo/slice'
import storage from "redux-persist/lib/storage";
import { orderSlice } from './order/slice'


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"]
}
const rootReducer = combineReducers({
  product: productSlice.reducer,
  productInfo:productInfoSlice.reducer,
  login:userSlice.reducer,
  cart:cartSlice.reducer,
  order:orderSlice.reducer

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  },
  devTools: true
})

const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

export default {store, persistor}