import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../components/Logo.component";
import SentEmailImage from "../assets/VerifyEmail.png";
import "../styles/resetPassword.css";
import resetPasswordConfig from "../content/resetPassword.config.json";
import { PrimaryButton } from "../components/button.component";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [formObj, setFormObj] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
  };

  const toggleShowPassword = () => {
    setFormObj({ ...formObj, showPassword: !formObj.showPassword });
  };

  const toggleShowConfirmPassword = () => {
    setFormObj({
      ...formObj,
      showConfirmPassword: !formObj.showConfirmPassword,
    });
  };

  const handleResetPassword = () => {
    // Implement password reset logic here
    console.log("Reset password logic goes here");
    navigate("/auth/password-reset-success");
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-image">
        <img src={SentEmailImage} alt="Background" />
      </div>
      <div className="reset-password-content">
        <Logo />
        <h2>{resetPasswordConfig.resetPasswordPage.title}</h2>
        <p>{resetPasswordConfig.resetPasswordPage.description}</p>
        <div className="input-container">
          <input
            type={formObj.showPassword ? "text" : "password"}
            name="password"
            placeholder={
              resetPasswordConfig.resetPasswordPage.passwordPlaceholder
            }
            value={formObj.password}
            onChange={handleInputChange}
          />
          <span onClick={toggleShowPassword}>
            {formObj.showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        <div className="input-container">
          <input
            type={formObj.showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder={
              resetPasswordConfig.resetPasswordPage.confirmPasswordPlaceholder
            }
            value={formObj.confirmPassword}
            onChange={handleInputChange}
          />
          <span onClick={toggleShowConfirmPassword}>
            {formObj.showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        <PrimaryButton className="button" onClick={handleResetPassword}>
          {resetPasswordConfig.resetPasswordPage.buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
