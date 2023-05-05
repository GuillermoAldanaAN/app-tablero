import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    username: "",
    email: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username, email } = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        }
    }
});

export const { addUser, changeEmail } = userSlice.actions;
//actions disponibles para utilizacion

export default userSlice.reducer;
//exportacion de reducer para acceder a states
