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
        updateProduct: (state, action) => {
            const { id, name } = action.payload
            const producto = state.data.find((product) => product.id === id)
            if (producto) {
                producto.name = name
            }
        },
        deleteProduct: (state, action) => {
            const id = action.payload
            state.data = state.data.filter((product) => product.id !== id)
        },
    }
})

export const {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
} = productsSlice.actions

export default productsSlice.reducer
