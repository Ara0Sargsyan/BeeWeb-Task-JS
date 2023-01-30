import { createSlice } from "@reduxjs/toolkit";
import { fetchLogIn, fetchSignUp } from "../actionCreators/loginRegistrActions";

const initialState = {
  email: {},
  logined: false,
  error: "",
};

export const LoginRegistrSlice = createSlice({
  name: "loginRegistr",
  initialState,
  reducers: {
    logOut(state) {
      state.logined = false;
      state.email = {};
    },
    clearError(state) {
      state.error = ""
    }
  },
  extraReducers: {
    [fetchLogIn.fulfilled]: (state, action) => {
      state.logined = true;
      state.email = action.payload;
      state.error = "";
    },
    [fetchLogIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchSignUp.fulfilled]: (state, action) => {
      state.logined = true;
      state.email = action.payload;
      state.error = "";
    },
    [fetchSignUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default LoginRegistrSlice.reducer;
export const { logOut, clearError } = LoginRegistrSlice.actions;
