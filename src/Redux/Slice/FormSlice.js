import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "sffgggghhsdvfdss",
  product: [],
};

const FormSlice = createSlice({
  name: "User_Form",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.product = [... state.product, action?.payload];
    },
  },
});

export const { addProduct } = FormSlice.actions;
export const formRed = FormSlice.reducer;
