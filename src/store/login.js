import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-expenses";

let timerId;
const authContx = createSlice({
  name: "auth",
  initialState: {
    email: "",
  },
  reducers: {
    logout(state) {
      localStorage.clear();
      state.email = "";
    },
    loginSet(state, action) {
      localStorage.setItem(
        "email",
        action.payload.email.toString().replaceAll(".", "_")
      );
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem(
        "tokenTime",
        new Date(new Date().getTime() + +action.payload.tokenTime * 1000)
      );
    },
  },
});

export const loginExpenses = (value) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setMessage({
        status: "Login: ",
        message: "Sign in to your account...",
        color: "blue",
      })
    );
    dispatch(uiActions.changeStateMessage(true));

    const sendLogin = async () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      const response = await fetch(value.url, {
        method: "POST",
        body: JSON.stringify({
          email: value.name,
          password: value.password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        await response.json().then((err) => {
          throw new Error(err.error.errors[0].message);
        });
      } else {
        const data = await response.json();

        dispatch(
          authActions.loginSet({
            email: value.name,
            token: data.idToken,
            tokenTime: data.expiresIn,
          })
        );
        dispatch(uiActions.checkIsLoading());
      }
    };
    try {
      await sendLogin();
      dispatch(
        uiActions.setMessage({
          status: "Login: ",
          message: "OK",
          color: "green",
        })
      );
      dispatch(uiActions.changeStateMessage(true)); //////////////timer */
      timerId = setTimeout(() => {
        dispatch(uiActions.changeStateMessage(false));
      }, 3000);
    } catch (error) {
      dispatch(
        uiActions.setMessage({
          status: "Login error: ",
          message: error.toString().split(":", 2),
          color: "red",
        })
      );
      dispatch(uiActions.changeStateMessage(true));
      timerId = setTimeout(() => {
        dispatch(uiActions.changeStateMessage(false));
      }, 3000);
    }
  };
};

export const authActions = authContx.actions;
export default authContx;
