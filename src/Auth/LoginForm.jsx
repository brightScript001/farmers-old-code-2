import React, { useReducer } from "react";
import "../styles/loginForm.css";
import Input from "./Input";
import Logo from "../components/Logo.component";
import SellerBg from "../assets/Seller BG.png";
import BuyerBg from "../assets/Buyer BG.png";
import textContent from "../content/loginForm.config.json";
import { PrimaryButton } from "../components/button.component";

const initialState = {
  email: "",
  password: "",
  role: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.role === "") {
      alert(textContent.loginForm.alertNoRole);
      return;
    }
  };

  const {
    loginTitle,
    signupPrompt,
    signupLinkText,
    roleLabel,
    rolePlaceholder,
    emailLabel,
    passwordLabel,
    forgotPasswordText,
    forgotPasswordLinkText,
    loginButtonText,
  } = textContent.loginForm;

  const backgroundImage = state.role === "Buyer" ? BuyerBg : SellerBg;

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-image">
          <img src={backgroundImage} alt="Background" />
        </div>
        <div className="login-form">
          <Logo />
          <h2>{loginTitle}</h2>
          <p>
            {signupPrompt} <a href="/">{signupLinkText}</a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="role-input">
              <label htmlFor="role">{roleLabel}</label>
              <select
                id="role"
                value={state.role}
                onChange={(e) =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "role",
                    value: e.target.value,
                  })
                }
                required
              >
                <option value="" disabled>
                  {rolePlaceholder}
                </option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>
            <Input
              type="email"
              label={emailLabel}
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
              required
            />
            <Input
              type="password"
              label={passwordLabel}
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "password",
                  value: e.target.value,
                })
              }
              required
            />
            <p className="forgot-password">
              {forgotPasswordText}
              <a href="/auth/forgot-password"> {forgotPasswordLinkText}</a>
            </p>
            <PrimaryButton
              type="submit"
              className="login-button"
              disabled={!state.role}
            >
              {loginButtonText}
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;