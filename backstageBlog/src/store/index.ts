import { configureStore } from "@reduxjs/toolkit"
import userInfoSlice from './features/userInfoSlice'

export default configureStore({
    reducer: {
        counter: userInfoSlice
    }
});