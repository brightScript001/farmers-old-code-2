import React, { useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/signUpForm.css";
import Input from "./Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../components/Logo.component";
import SellerBg from "../assets/Seller BG.png";
import BuyerBg from "../assets/Buyer BG.png";
import textConfig from "../content/signUpForm.json";
import { PrimaryButton } from "../components/button.component";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  showPassword: false,
  showConfirmPassword: false,
  showCriteria: false,
  formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "TOGGLE_PASSWORD_VISIBILITY":
      return { ...state, [action.field]: !state[action.field] };
    case "SET_FORM_ERRORS":
      return {
        ...state,
        formErrors: { ...state.formErrors, ...action.errors },
      };
    case "SET_CRITERIA_VISIBILITY":
      return { ...state, showCriteria: action.value };
    default:
      return state;
  }
};

const SignUpForm = ({ selectedRole }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const passwordCriteria = [
    { regex: /.{8,}/, message: textConfig.signUp.passwordCriteria },
    { regex: /[A-Z]/, message: textConfig.signUp.passwordUppercase },
    { regex: /[a-z]/, message: textConfig.signUp.passwordLowercase },
    { regex: /\d/, message: textConfig.signUp.passwordDigit },
    {
      regex: /[!@#$%^&*(),.?":{}|<>]/,
      message: textConfig.signUp.passwordSpecial,
    },
  ];

  const validatePassword = (password) => {
    return passwordCriteria.map((criteria) => ({
      ...criteria,
      isValid: criteria.regex.test(password),
    }));
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "SET_FIELD", field: "password", value: e.target.value });
    if (!state.showCriteria) {
      dispatch({ type: "SET_CRITERIA_VISIBILITY", value: true });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    const errors = {};
    if (state.firstName.trim() === "") {
      errors.firstName = `${textConfig.signUp.firstNameLabel} is required.`;
    }
    if (state.lastName.trim() === "") {
      errors.lastName = `${textConfig.signUp.lastNameLabel} is required.`;
    }
    if (state.email.trim() === "") {
      errors.email = `${textConfig.signUp.emailLabel} is required.`;
    }
    const passwordErrors = validatePassword(state.password);
    if (!passwordErrors.every((criteria) => criteria.isValid)) {
      errors.password = textConfig.signUp.passwordCriteria;
    }
    if (state.password !== state.confirmPassword) {
      errors.confirmPassword = textConfig.signUp.passwordsDoNotMatch;
    }

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_FORM_ERRORS", errors });
      return;
    }

    // If no errors, navigate to verify email page
    navigate("/auth/verify-email", {
      state: { userName: `${state.firstName} ${state.lastName}` },
    });
  };

  const backgroundImage = selectedRole === "Buyer" ? BuyerBg : SellerBg;

  return (
    <div className="main-container">
      <div className="signup-container">
        <div className="signup-image">
          <img src={backgroundImage} alt="Background" />
        </div>
        <div className="signup-form">
          <div className="logo">
            <Logo />
          </div>
          <h2>
            {textConfig.signUp.createAccount.replace("{role}", selectedRole)}
          </h2>
          <p>
            {textConfig.signUp.alreadyHaveAccount}{" "}
            <Link to="/auth/login">Login</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label={textConfig.signUp.firstNameLabel}
              value={state.firstName}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "firstName",
                  value: e.target.value,
                })
              }
              error={state.formErrors.firstName}
            />
            <Input
              type="text"
              label={textConfig.signUp.lastNameLabel}
              value={state.lastName}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "lastName",
                  value: e.target.value,
                })
              }
              error={state.formErrors.lastName}
            />
            <Input
              type="email"
              label={textConfig.signUp.emailLabel}
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
              error={state.formErrors.email}
            />
            <Input
              type={state.showPassword ? "text" : "password"}
              label={textConfig.signUp.passwordLabel}
              value={state.password}
              onChange={handlePasswordChange}
              error={state.formErrors.password}
              icon={
                state.showPassword ? (
                  <FaEyeSlash
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_PASSWORD_VISIBILITY",
                        field: "showPassword",
                      })
                    }
                  />
                ) : (
                  <FaEye
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_PASSWORD_VISIBILITY",
                        field: "showPassword",
                      })
                    }
                  />
                )
              }
            />
            {state.showCriteria && (
              <div className="password-criteria">
                {validatePassword(state.password).map((criteria, index) => (
                  <p
                    key={index}
                    className={`criteria-message ${
                      criteria.isValid ? "valid" : "invalid"
                    }`}
                  >
                    {criteria.message}
                  </p>
                ))}
              </div>
            )}
            <Input
              type={state.showConfirmPassword ? "text" : "password"}
              label={textConfig.signUp.confirmPasswordLabel}
              value={state.confirmPassword}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "confirmPassword",
                  value: e.target.value,
                })
              }
              error={state.formErrors.confirmPassword}
              icon={
                state.showConfirmPassword ? (
                  <FaEyeSlash
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_PASSWORD_VISIBILITY",
                        field: "showConfirmPassword",
                      })
                    }
                  />
                ) : (
                  <FaEye
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_PASSWORD_VISIBILITY",
                        field: "showConfirmPassword",
                      })
                    }
                  />
                )
              }
            />
            <p
              className={
                state.password === state.confirmPassword ? "valid" : "invalid"
              }
            >
              {state.password !== state.confirmPassword &&
                textConfig.signUp.passwordsDoNotMatch}
            </p>
            <PrimaryButton type="submit" className="create-account-button">
              {textConfig.signUp.createAccount}
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
