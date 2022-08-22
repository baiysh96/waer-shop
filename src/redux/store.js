import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import productReducer from './slices/productSlice'
import userReducer from './slices/userSlice'
import favoriteReducer from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    favorite: favoriteReducer,
  },
})
