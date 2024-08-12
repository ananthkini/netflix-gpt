import { createSlice } from "@reduxjs/toolkit";

const gpt = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    handleShowGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
  },
});

export const { handleShowGptSearch } = gpt.actions;

export default gpt.reducer;
