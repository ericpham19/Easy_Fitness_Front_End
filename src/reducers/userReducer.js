import { createSlice } from '@reduxjs/toolkit'
import { registerUserAction } from '../actions/userActions'

const initialState = {
  loading: false,
  userInfo: {}, 
  userToken: null,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRegisterUser: (state, payload) => {
        debugger
        return {
            ...state,
            userToken: payload.payload.jwt,
            userInfo: payload.payload.user,
            success: true,
        }
    }
  },
})
export const { setRegisterUser } = userSlice.actions

export default userSlice.reducer