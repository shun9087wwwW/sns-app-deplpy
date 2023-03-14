import React, { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "./../../actionCalls";
import { AuthContext } from "./../../state/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SNS</h3>
          <span className="loginDesc">はじめてみよう</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="email"
              className="loginInput"
              placeholder="E-メール"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">ログイン</button>
            {/* <a className="loginForgot">パスワードを忘れた方へ</a> */}
            {/* <button className="loginRegisterButton text-center">
              アカウント作成
            </button> */}
            <a className="loginForgot" onClick={() => navigate("/register")}>
              新規登録の方はこちら
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
