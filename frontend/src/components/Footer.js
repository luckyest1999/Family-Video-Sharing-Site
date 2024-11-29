import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Movflx. All Rights Reserved.</p>
      <Links>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </Links>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #121212;
  padding: 20px;
  text-align: center;
  color: #fff;
`;

const Links = styled.div`
  margin-top: 10px;

  a {
    color: #ff385c;
    margin: 0 10px;
  }
`;

export default Footer;
