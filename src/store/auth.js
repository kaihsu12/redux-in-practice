//IMPORTANT hooks from redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//IMPORTANT get action method through counterSlice
export const authActions = authSlice.actions;

export default authSlice.reducer;
