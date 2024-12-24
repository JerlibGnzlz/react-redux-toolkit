import { configureStore } from "@reduxjs/toolkit";



let userReducer = {}


export const store = configureStore({
    reducer: {
        data: {
            users: userReducer
        }
    }
})