import { createSlice } from '@reduxjs/toolkit'



const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        getProducts: (state, action) => { },
        createProduct: (state, action) => { },
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
