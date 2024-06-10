import styled from "styled-components";
import logoImage from "../assets/Onefarm-Tech-Logo 2.png";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  display: block;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={logoImage} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
