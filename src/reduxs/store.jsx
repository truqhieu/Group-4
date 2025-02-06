import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReduxs/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
