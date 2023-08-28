import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import usersReducer from './features/usersSlice'
import ordersReducer from './features/ordersSlice'

const store = configureStore({
  reducer: {
    allCart: cartReducer,
    users: usersReducer,
    orders: ordersReducer
  },
})

export default store