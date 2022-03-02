import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productSlice } from './product/slice'


const rootReducer = combineReducers({
  product: productSlice.reducer,

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