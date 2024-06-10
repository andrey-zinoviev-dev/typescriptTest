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

  }
});

export default loginSlice.reducer