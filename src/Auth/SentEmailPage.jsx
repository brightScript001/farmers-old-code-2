import { useNavigate } from "react-router-dom";
import "../styles/sentEmail.css";
import Logo from "../components/Logo.component";
import SentEmailImage from "../assets/Buyer BG.png";
import sentEmailConfig from "../content/sentEmailConfig.json";
import { PrimaryButton } from "../components/button.component";

const SentEmailPage = () => {
  const navigate = useNavigate("/reset-password");

  const handleSentEmail = () => {
    navigate("/auth/reset-password");
  };

  return (
    <div className="sent-email-container">
      <div className="sent-email-image">
        <img src={SentEmailImage} alt="Background" />
      </div>
      <div className="sent-email-content">
        <Logo />
        <h2>{sentEmailConfig.sentEmailPage.title}</h2>
        <p>{sentEmailConfig.sentEmailPage.description}</p>
        <p className="bold">
          {sentEmailConfig.sentEmailPage.troubleFindingEmail}
        </p>
        <p>{sentEmailConfig.sentEmailPage.troubleFindingEmailDescription}</p>
        <PrimaryButton className="button" onClick={handleSentEmail}>
          {sentEmailConfig.sentEmailPage.buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SentEmailPage;
