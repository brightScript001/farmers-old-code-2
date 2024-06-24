import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/verifyEmail.css";
import Logo from "../components/Logo.component";
import emailImage from "../assets/VerifyEmail.png";
import textContent from "../content/verifyEmail.config.json";
import { PrimaryButton } from "../components/button.component";

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || { userName: "User" };

  console.log("VerifyEmailPage rendered", { userName });

  const handleVerificationSuccess = () => {
    navigate("/auth/verify-email-success", { state: { userName } });
  };

  const {
    title,
    intro,
    welcomeMessage,
    troubleFindingEmail,
    requestNewLink,
    buttonText,
  } = textContent.verifyEmailPage;

  return (
    <div className="verify-email-container">
      <div className="verify-email-image">
        <img src={emailImage} alt="Email Verification" />
      </div>
      <div className="verify-email-content">
        <Logo />
        <h2>{title}</h2>
        <p>
          {intro} <span>{userName}</span>,
        </p>
        <p>{welcomeMessage}</p>
        <p className="bold">{troubleFindingEmail}</p>
        <p>{requestNewLink}</p>
        <PrimaryButton
          className="resend-button"
          onClick={handleVerificationSuccess}
        >
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
