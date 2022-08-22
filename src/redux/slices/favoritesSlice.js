import { createSlice } from '@reduxjs/toolkit'

const favoriteInitialState = {
  favorite: JSON.parse(localStorage.getItem('favorite')) || [],
  amount: 0,
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: favoriteInitialState,
  reducers: {
    addToFavorite: (state, action) => {
      let included = false
      state.favorite.forEach((product) => {
        if (product.id === action.payload.id) {
          included = true
          product.amount = product.amount + 1
        }
      })
      if (!included) {
        state.favorite = [...state.favorite, action.payload]
        localStorage.setItem('favorite', JSON.stringify([...state.favorite]))
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload,
      )
      localStorage.setItem('favorite', JSON.stringify([...state.favorite]))
    },
  },
})
export const { addToFavorite, removeFromFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer
