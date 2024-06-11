import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Musician } from "../models";

interface UserState {
    name: null | string,
    musicians?:Musician[],
    _id: null | string,
    email: null | string,
}

const initialState:UserState = {
    name: null,
    musicians: [],
    _id: null,
    email: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, action:PayloadAction<UserState>) => {
            // console.log(action.payload);
            // return state;
            state = action.payload;
       }
    },
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;

// const initialState