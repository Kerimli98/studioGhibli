import { configureStore } from "@reduxjs/toolkit";
import ghibliSlice from "./ghibliSlice";

const store = configureStore({
  reducer: {
    ghibli: ghibliSlice.reducer,
  },
});
export default store;
