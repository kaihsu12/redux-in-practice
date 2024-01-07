//UNDERSTAND
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  //UNDERSTAND
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  //UNDERSTAND
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {/*UNDERSTAND*/}
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              {/*UNDERSTAND use function handler */}
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
