//IMPORTANT hooks from redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

//UNDERSTAND create an object
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  //IMPORTANT initial state
  initialState: initialCounterState,
  // IMPORTANT Reducers(有+s) is an object, a map you could say, of all the reducers this slice needs.
  reducers: {
    //IMPORTANT every method here (parameter的那個state) will automatically receive the latest state.
    //IMPORTANT Redux toolkit internally uses another package called imgur, which will detect code like this and which will automatically clone the existing state, create a new state object, keep all the state which we're not editing, and override the state which we are editing in an immutable way.
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//IMPORTANT get action method through counterSlice
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
