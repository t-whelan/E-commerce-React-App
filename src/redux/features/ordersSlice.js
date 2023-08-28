import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: [{name: "Jacob Mutula", cardnumber: '123456730987', date: '27/09/2013', cvc: 123 }]
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addPayment: (state, action) => {
            state.orders = [...state.orders, action.payload]
        }
    }
})

export const { addPayment } = ordersSlice.actions

export default ordersSlice.reducer