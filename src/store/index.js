import { configureStore } from "@reduxjs/toolkit";
import authContx from "./login";
import uiExpenses from "./ui-expenses";
import itemsList from "./items";

const store = configureStore({
  reducer: {
    auth: authContx.reducer,
    ui: uiExpenses.reducer,
    item: itemsList.reducer,
  },
});

export default store;
