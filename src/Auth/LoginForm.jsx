import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
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
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (state.role === "") {
      alert(textContent.loginForm.alertNoRole);
      return;
    }

    const users = {
      Buyer: { email: "buyer@example.com", password: "buyer123" },
      Seller: { email: "seller@example.com", password: "seller123" },
    };

    const { email, password, role } = state;
    if (
      users[role] &&
      email === users[role].email &&
      password === users[role].password
    ) {
      setUser({ email, role }); // Set authenticated user in context
      navigate(`/${role.toLowerCase()}-dashboard`); // Navigate based on role
    } else {
      alert("Invalid credentials. Please try again.");
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
