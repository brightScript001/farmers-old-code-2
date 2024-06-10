import { useNavigate } from "react-router-dom";
import "./style.css";
import Buyer from "../../assets/signup_buyer.png";
import Seller from "../../assets/signup_seller.png";
import textContent from "../../content/roleSelection.json";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/${role.toLowerCase()}signup`);
  };

  const { title, description, buyer, seller } = textContent.roleSelection;

  return (
    <div className="role-selection">
      <h2>{title}</h2>
      <hr className="green-line" />
      <p>{description}</p>
      <div className="role-options">
        <div className="role-option" onClick={() => handleRoleSelection(buyer)}>
          <img src={Buyer} alt={buyer} />
          <p>{buyer}</p>
        </div>
        <div
          className="role-option"
          onClick={() => handleRoleSelection(seller)}
        >
          <img src={Seller} alt={seller} />
          <p>{seller}</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
