import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  totalAmount: localStorage.getItem('amount') || 0,
  totalPrice: localStorage.getItem('price') || 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      let included = false
      state.cart.forEach((product) => {
        if (product.id === action.payload.id) {
          included = true
          product.amount += 1
        }
      })
      if (!included) {
        state.cart = [...state.cart, action.payload]
        localStorage.setItem('cart', JSON.stringify([...state.cart]))
      }
      state.totalAmount += 1
      localStorage.setItem('amount', state.totalAmount)
    },
    increment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.amount += 1
      state.totalAmount += 1
      localStorage.setItem('amount', state.totalAmount)
    },
    decrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item.amount > 1) {
        item.amount += 1
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload)
      }
      state.totalAmount -= 1
      localStorage.setItem('amount', state.totalAmount)
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      state.cart = state.cart.filter((item) => item.id !== action.payload)
      state.totalAmount -= item.amount
      localStorage.setItem('cart', JSON.stringify([...state.cart]))
      localStorage.setItem('amount', state.totalAmount)
    },
    calculateTotal: (state) => {
      state.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.amount * item.price,
        0,
      )
      localStorage.setItem('price', state.totalPrice)
    },
  },
})

export const {
  addToCart,
  increment,
  decrement,
  calculateTotal,
  removeFromCart,
} = cartSlice.actions
export default cartSlice.reducer
