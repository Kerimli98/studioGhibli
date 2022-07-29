import { createSlice } from "@reduxjs/toolkit";

const ghibliSlice = createSlice({
  name: "ghibli",
  initialState: {
    movieList: [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.movieList.push({
        id: newItem.id,
        title: newItem.title,
        image: newItem.image,
        desc: newItem.desc,
        icon: newItem.icon,
        director: newItem.director,
        date: newItem.date,
      });
    },
    removeItem(state, action) {
      const removedItemId = action.payload;
      state.movieList = state.movieList.filter(
        (item) => item.id !== removedItemId
      );
    },
  },
});

export const ghibliActions = ghibliSlice.actions;
export default ghibliSlice;
