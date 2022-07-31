import { createSlice } from "@reduxjs/toolkit";

const uiExpenses = createSlice({
  name: "ui",
  initialState: {
    isLogin: false,
    isMessage: false,
    isLoad: false,
    message: {
      status: "",
      message: "",
      color: "",
    },
  },
  reducers: {
    checkIsLoading(state) {
      if (localStorage.getItem("token")) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
    isLoading(state) {
      state.isLoad = !state.isLoad;
    },
    setMessage(state, actions) {
      state.message.status = actions.payload.status;
      state.message.message = actions.payload.message;
      state.message.color = actions.payload.color;
    },
    changeStateMessage(state, action) {
      state.isMessage = action.payload;
    },
  },
});

export const uiActions = uiExpenses.actions;
export default uiExpenses;
