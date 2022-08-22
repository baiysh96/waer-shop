import { createSlice } from '@reduxjs/toolkit'
const productInitialState = {
  products: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState: productInitialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { getProducts } = productSlice.actions
export default productSlice.reducer
