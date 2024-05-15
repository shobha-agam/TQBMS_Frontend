import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../Feature/AuthSlices/LoginSlice';
import SignupReducer from '../Feature/AuthSlices/SignupSlice';
import ChangePasswordReducer from '../Feature/AuthSlices/ChangePasswordSlice';


export const store = configureStore({
    reducer:{
        authsignup: SignupReducer,
        authlogin: LoginReducer,
        changepass: ChangePasswordReducer,

    },
})
