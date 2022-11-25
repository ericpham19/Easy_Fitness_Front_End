import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    userInfo: JSON.parse(localStorage.getItem('userInfo')),
    userToken: localStorage.getItem('userToken'),
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRegisterUser: (state, payload) => {
            return {
                ...state,
                success: true,
            }
        },
        login: (state, payload) => {
            localStorage.setItem('userToken', payload.payload.jwt);
            localStorage.setItem('userInfo', JSON.stringify(payload.payload.user));
            return {
                ...state,
                userInfo: payload.payload.user,
                userToken: payload.payload.jwt,
                success: true,
            }
        },
        logout: (state, payload) => {
            localStorage.removeItem('userToken');
            localStorage.removeItem('userInfo');
            return {
                ...state,
                userInfo: null,
                userToken: null,
                success: true
            }
        },
    }
})
export const { setRegisterUser, login, logout } = userSlice.actions

export default userSlice.reducer