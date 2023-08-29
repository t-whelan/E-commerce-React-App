import { createSlice } from '@reduxjs/toolkit'
import products from '../../Data'

const initialState = {
    cart: [],
    items: products,
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload.id)
            if(find >= 0){
                state.cart[find].quantity += 1
            }else{
                state.cart.push(action.payload)
            }
        },
        getCartTotal: (state) => {
            let {totalQuantity, totalPrice} = state.cart.reduce((cartTotal, cartItem) => {
                console.log("cartTotal", cartTotal)
                console.log("cartItem", cartItem)
                const {price, quantity} = cartItem
                console.log(price, quantity)
                const itemTotal = price * quantity
                cartTotal.totalPrice += itemTotal
                cartTotal.totalQuantity += quantity
                return cartTotal
            },
            {
                totalPrice: 0, 
                totalQuantity: 0
            })
            state.totalPrice = (totalPrice).toFixed(2)
            state.totalQuantity = totalQuantity
        },
        getItemTotal: (state, action) => {
            state.cart = state.cart.map(item => {
                if(item.id === action.payload.id){
                    const itemTotal = item.price * item.quantity
                    return itemTotal
                }
                return item
            })
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if(item.id === action.payload.id){
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if(item.id === action.payload.id){
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            }).filter(item => item.quantity !== 0)
        }
    }
})

export const { addToCart, getCartTotal, getItemTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions

export default cartSlice.reducer