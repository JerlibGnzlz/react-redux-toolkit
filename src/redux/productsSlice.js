import { createSlice } from '@reduxjs/toolkit'



const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
    },
    reducers: {
        getProducts: (state, action) => {
            state.data = action.payload
        },
        createProduct: (state, action) => {
            state.data.push(action.payload)
        },
        updateProduct: (state, action) => { },
        deleteProduct: (state, action) => { },
    }
})

export const {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
} = productsSlice.actions

export default productsSlice.reducer
