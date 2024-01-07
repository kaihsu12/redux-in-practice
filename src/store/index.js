// UNDERSTAND hooks from redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
//IMPORTANT import Slice data from files
//UNDERSTAND 可以另外命名 - export default的data
import counterReducer from './counter';
import authReducer from './auth';

//IMPORTANT create store
//IMPORTANT configureStore - it makes merging multiple reducers into one reducer easier thereafter
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
