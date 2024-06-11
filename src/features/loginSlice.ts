import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  loggedIn: boolean,
}

const initialState:LoginState = {
  loggedIn: false,
}

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    startLogin: state => {
      state.loggedIn = true;
    }
  }
});

export const {startLogin} = loginSlice.actions;

export default loginSlice.reducer