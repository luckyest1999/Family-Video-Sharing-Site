import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Movflx</Logo>
      <Nav>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Nav>
      <MenuIcon>
        <FiMenu />
      </MenuIcon>
    </HeaderContainer>
  );
};

const NavBar = styled.nav`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin: 0 15px;

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;


const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: #222222;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  height: 50px;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #ff385c;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;
