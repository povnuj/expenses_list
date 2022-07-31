import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-expenses";
//Save&Load data control
const itemsList = createSlice({
  name: "item",
  initialState: {
    list: [],
  },
  reducers: {
    setitems(state, action) {
      state.list = action.payload;
    },
    getItems(state, action) {
      action.itemsList = state.list;
    },
  },
});
let timerId;
export const saveLoadItems = (url, body, isMsg) => {
  return async (dispatch) => {
    const sendFetch = async () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      const response = await fetch(url, body);
      if (!response.ok) {
        await response.json().then((err) => {
          throw new Error(err.error.errors[0].message);
        });
      } else {
        const data = await response.json();

        if (body.method === "GET") {
          const formattingData = [];
          for (const key in data) {
            formattingData.push({
              id: key,
              amount: data[key].amount,
              date: data[key].date.split("T")[0].split("-").join(","),
              title: data[key].title,
            });
          }
          dispatch(itemsActions.setitems(formattingData));
        } else {
          dispatch(uiActions.isLoading());
        }
      }
    };
    try {
      await sendFetch();
    } catch (error) {
      dispatch(
        uiActions.setMessage({
          status: "Error: ",
          message: error,
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

export const itemsActions = itemsList.actions;
export default itemsList;
