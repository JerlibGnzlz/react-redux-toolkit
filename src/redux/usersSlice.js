import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducer: {
        fetchUsers: (state, action) => {
            return action.payload
        }
    }
})

export const { fetchUsers } = usersSlice.actions

export default usersSlice.reducer

