import { createSlice } from "@reduxjs/toolkit";

const cardslice = createSlice({
  name: "card",
  initialState: {
    stateinslice: [
      {
        title: "Rohu",
        p: "topper",
        img: "https://images.pexels.com/photos/4041384/pexels-photo-4041384.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      { title: "Madhu", p: "bitch", img: "rfdcx" },
      { title: "Baby", p: "topper", img: "rfdcx" },
      { title: "Madhushraba", p: "bitch", img: "rfdcx" },
    ],
  },
  reducers: {
    addcard: (state, action) => {
      state.stateinslice.unshift(action.payload);
    },
  },
});

export default cardslice.reducer;
export const { functions } = cardslice.actions;
