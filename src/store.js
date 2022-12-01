import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import SessionReducer from './reducers/SessionReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    session: SessionReducer
  }
})
export default store