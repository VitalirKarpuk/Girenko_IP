import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
  linems: [],
  pillow: [],
  palid: [],
  towel: [],
  bagIcons: {},
};

const globalPropsSlice = createSlice({
  name: 'globalProps',
  initialState,
  reducers: null,
});

export default globalPropsSlice.reducer;
