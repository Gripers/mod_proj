import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoginModalOpened: false,
    isMobileDrawerOpened: false,
  },
  reducers: {
    loginModalAction: (state, action) => {
      state.isLoginModalOpened = action.payload;
    },
    mobileDrawerAction: (state, action) => {
      state.isMobileDrawerOpened = action.payload;
    },
  },
});

export const { loginModalAction, mobileDrawerAction } = globalSlice.actions;

export default globalSlice.reducer;
