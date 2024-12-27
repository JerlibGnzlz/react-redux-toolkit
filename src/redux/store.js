import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import productResucer from "./productsSlice"



export const store = configureStore({
    reducer: {
        users: usersReducer,
        product: productResucer
    }
})
