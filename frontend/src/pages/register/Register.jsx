import React, { useRef } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // パスワードと確認用のパスワードが合っているかどうかを確認
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワードが違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        // registerAPIを叩く
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SIMPLE-SNS</h3>
          <span className="loginDesc ms-5 ps-4">はじめてみよう</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">新規登録はこちら</p>
            <input
              type="text"
              className="loginInput"
              placeholder="ユーザー名"
              required
              ref={username}
              autoComplete="true"
            />
            <input
              type="email"
              className="loginInput"
              placeholder="E-メール"
              required
              ref={email}
              autoComplete="true"
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
              autoComplete="true"
            />
            <input
              type="password"
              className="loginInput"
              placeholder="確認用パスワード"
              required
              minLength="6"
              ref={passwordConfirmation}
              autoComplete="true"
            />
            <button className="loginButton" type="submit">
              サインアップ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
