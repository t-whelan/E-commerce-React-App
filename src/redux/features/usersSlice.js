import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [{city: "Khakhanwa", country: "Sudan", name: "Carlos Levi", province: "Nooorla", streetname: "34 Kampala road"},
    {city: "Khakhanwa", country: "Sudan", name: "Carlos Levi", province: "Nooorla", streetname: "34 Kampala road"}]
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        }
    }
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer