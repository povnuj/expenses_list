import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { loginExpenses } from "../../store/login";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passRef.current.value;

    if (isLogin) {
      dispatch(
        loginExpenses({
          name: enteredEmail,
          password: enteredPassword,
          url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBN7HTanHxmLizvWWSYR-D22xDom-fZ_YM",
        })
      );
    } else {
      dispatch(
        loginExpenses({
          name: enteredEmail,
          password: enteredPassword,
          url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBN7HTanHxmLizvWWSYR-D22xDom-fZ_YM",
        })
      );
    }
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passRef} />
        </div>
        <div className={styles.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
