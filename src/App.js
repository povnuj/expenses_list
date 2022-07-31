import React, { useEffect } from "react";
import "./App.css";
import Expenses from "./components/Expenses.js";
import AddExpense from "./components/AddExpense/AddExpense.js";
import Header from "./components/Header/Header";
import AuthForm from "./components/Auth/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-expenses";
import { saveLoadItems } from "./store/items";
import StatusMessages from "./components/Meseges/StatusMessages";

function App() {
  const dispatch = useDispatch();

  let isLogin = useSelector((state) => state.ui.isLogin);
  let isMessage = useSelector((state) => state.ui.isMessage);
  let isLoad = useSelector((state) => state.ui.isLoad);
  const userName = localStorage.getItem("email") + ".json/";

  useEffect(() => {
    dispatch(uiActions.checkIsLoading());
    dispatch(
      saveLoadItems(
        "https://sushi-5aab6-default-rtdb.firebaseio.com/" + userName,
        {
          method: "GET",
        }
      )
    );
  }, [isLogin, isLoad, userName, dispatch]);

  const loginFormLoading = !isLogin ? (
    <AuthForm />
  ) : (
    <>
      <AddExpense />
      <Expenses />
    </>
  );
  return (
    <>
      {isMessage && <StatusMessages />}
      <Header />
      {loginFormLoading}
    </>
  );
}

export default App;
