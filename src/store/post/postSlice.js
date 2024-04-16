import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts:[]
   
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts = action.payload;

        }
    }
});

export const { addPost } = postSlice.actions;
//actions disponibles para utilizacion

export default postSlice.reducer;
//exportacion de reducer para acceder a states
