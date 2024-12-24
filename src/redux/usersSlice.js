import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducer: {
        fetchUsers: (state, action) => {
            return action.payload
        }
    }
})

export const { fetchUsers } = usersSlice.actions