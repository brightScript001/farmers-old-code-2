import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPasswordPage.css";
import Logo from "../components/Logo.component";
import forgotPasswordConfig from "../content/forgotPasswordConfig.json";
import { PrimaryButton } from "../components/button.component";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Password reset email sent to:", email);
    navigate("/auth/sent-email", { state: { email } });
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <Logo />
        <h2>{forgotPasswordConfig.forgotPasswordPage.title}</h2>
        <p>{forgotPasswordConfig.forgotPasswordPage.description}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={forgotPasswordConfig.forgotPasswordPage.placeholder}
          />
          <PrimaryButton type="submit" className="send-button">
            {forgotPasswordConfig.forgotPasswordPage.submitButton}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
