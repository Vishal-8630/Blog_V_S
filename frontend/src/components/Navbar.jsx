import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

const Hamburger = styled('div').withConfig({
    shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== 'isOpen',
})`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
  }
`;

const Ul = styled('ul').withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== 'isOpen',
})`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const Li = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 0.9em;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <Logo>My App</Logo>
      <Hamburger onClick={toggleMenu} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Ul isOpen={isOpen}>
        <Li>
          <StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/register" onClick={handleLinkClick}>Register</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/login" onClick={handleLinkClick}>Login</StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;