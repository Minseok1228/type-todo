import { configureStore } from "@reduxjs/toolkit";
import customModalSlice from "./module/customModalSlice";
const store = configureStore({
  reducer: {
    customModalSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
