import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosV1 } from '../../config/api'

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (values, thunkAPI) => {
    try {
      const { data } = await axiosV1.post('/api/auth/register', values)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('token', data.accessToken)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)
export const signInUser = createAsyncThunk(
  'user/signupUser',
  async (values, thunkAPI) => {
    try {
      const { data } = await axiosV1.post('/api/auth/login', values)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('token', JSON.stringify(data.accessToken))
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkUserAuth: (state) => {
      state.isSuccess = state.user && state.token
    },
    logout: (state) => {
      state.user = {}
      state.token = ''
      state.isSuccess = false
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.accessToken
      state.isFetching = false
      state.isSuccess = true
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true
    },
    [signupUser.rejected]: (state, action) => {
      state.isFetching = false
      state.isError = true
      state.errorMessage = action.payload.message
    },
    [signInUser.fulfilled]: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.accessToken
      state.isFetching = false
      state.isSuccess = true
    },
    [signInUser.pending]: (state) => {
      state.isFetching = true
    },
    [signInUser.rejected]: (state, action) => {
      state.isFetching = false
      state.isError = true
      state.errorMessage = action.payload.message
    },
  },
})
export const { logout, checkUserAuth } = userSlice.actions
export default userSlice.reducer
