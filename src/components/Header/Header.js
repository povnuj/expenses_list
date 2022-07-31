import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/login";
import { uiActions } from "../../store/ui-expenses";

const Header = (props) => {
  const isLogin = useSelector((state) => state.ui.isLogin);
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(authActions.logout());
    dispatch(uiActions.checkIsLoading());
  };

  const logOutBtnShow = isLogin ? (
    <div>
      <button onClick={logOutUser}>Logout</button>
    </div>
  ) : (
    ""
  );
  return (
    <>
      <header className={styles.header}>
        <h1>ExpensesCalc</h1>
        {logOutBtnShow}
      </header>
    </>
  );
};
export default Header;
