import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/verifyEmailSuccess.css";
import Logo from "../components/Logo.component";
import emailImage from "../assets/VerifyEmail.png";
import textContent from "../content/verifyEmailSuccess.config.json";
import { PrimaryButton } from "../components/button.component";

const VerifyEmailSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || { userName: "User" };
  const [countdown, setCountdown] = useState(40);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/auth/login");
    }, 40000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  const {
    title,
    intro,
    successMessage,
    redirectingMessage,
    troubleRedirecting,
    noWorriesMessage,
    buttonText,
  } = textContent.verifyEmailSuccessPage;

  return (
    <div className="verify-email-success-container">
      <div className="verify-email-success-image">
        <img src={emailImage} alt="Email Verification Success" />
      </div>
      <div className="verify-email-success-content">
        <Logo />
        <h2>{title}</h2>
        <p>
          {intro} <span>{userName}</span>,
        </p>
        <p>{successMessage}</p>
        <p>{redirectingMessage.replace("{countdown}", countdown)}</p>
        <p className="bold">{troubleRedirecting}</p>
        <p>{noWorriesMessage}</p>
        <PrimaryButton
          className="login-button"
          onClick={() => navigate("/auth/login")}
        >
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default VerifyEmailSuccessPage;
