// UNDERSTAND import需要hooks
import { createStore } from 'redux';

//UNDERSTAND create an object for reducer to use
const initialState = { counter: 0, showCounter: true };

//IMPORTANT Create reducer to update state
//IMPORTANT 用reducer去update state,return的結構要完全跟original state是一樣的
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    //UNDERSTAND return的結構要完全跟原本的state是一樣的
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

//IMPORTANT create store
const store = createStore(counterReducer);

export default store;
