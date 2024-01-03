// UNDERSTAND import需要hooks
import { useDispatch, useSelector } from 'react-redux';
//
import classes from './Counter.module.css';

const Counter = () => {
  // IMPORTANT
  const dispatch = useDispatch();

  //IMPORTANT 用useSelecor去擷取我們要用的data from store
  //IMPORTANT store如果被update, 用useSelector的話會自動刷新component
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  // IMPORTANT create action through dispatch for updating store
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  //IMPORTANT dispatch的argument可以放任何你會用到的data去update state
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
