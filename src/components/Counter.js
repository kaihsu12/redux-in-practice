// UNDERSTAND import需要hooks
import { useDispatch, useSelector } from 'react-redux';
// IMPORTANT import action method
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  // IMPORTANT
  const dispatch = useDispatch();

  //IMPORTANT 用useSelecor去擷取我們要用的data from store
  //IMPORTANT store如果被update, 用useSelector的話會自動刷新component
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // IMPORTANT create action through dispatch for updating store
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  //IMPORTANT
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //IMPORTANT {type: SOME UNIQUE IDENTIFIER, payload: 10}在dispatch時會製造出來的object,paylod是默認的名稱不能改
    //UNDERSTAND 這裡之後忘記的話,可以回去看Udemy的Redux章節的"Migrating Everything To Redux Toolkit"
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
