import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/passwordResetSuccessPage.css";
import Logo from "../components/Logo.component";
import SentEmailImage from "../assets/Buyer BG.png";
import passwordResetSuccessConfig from "../content/passwordResetSuccessConfig.json";
import { PrimaryButton } from "../components/button.component";

const PasswordResetSuccessPage = () => {
  const navigate = useNavigate();
  const [redirectTimer, setRedirectTimer] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (redirectTimer > 0) {
        setRedirectTimer(redirectTimer - 1);
      } else {
        navigate("/auth/login");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [redirectTimer, navigate]);

  const handleLoginRedirect = () => {
    navigate("/auth/login");
  };

  return (
    <div className="password-reset-success-container">
      <div className="password-reset-success-image">
        <img src={SentEmailImage} alt="Background" />
      </div>
      <div className="password-reset-success-content">
        <Logo />
        <h2>{passwordResetSuccessConfig.passwordResetSuccessPage.title}</h2>
        <p>{passwordResetSuccessConfig.passwordResetSuccessPage.description}</p>
        <p>
          {passwordResetSuccessConfig.passwordResetSuccessPage.redirectText.replace(
            "{seconds}",
            redirectTimer
          )}
        </p>
        <p>
          {passwordResetSuccessConfig.passwordResetSuccessPage.redirectWarning}
        </p>
        <PrimaryButton className="button" onClick={handleLoginRedirect}>
          {passwordResetSuccessConfig.passwordResetSuccessPage.buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PasswordResetSuccessPage;
