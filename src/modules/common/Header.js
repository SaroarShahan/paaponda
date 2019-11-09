import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { HeaderArea } from "./styles/HeaderStyle";
import UserAvatar from "./../../assets/saroarshahan.jpg";

const Header = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  let dropdownMenu = useRef(null);

  const showMenu = () => {
    setIsUserOpen(true);
    document.addEventListener("click", closeMenu);
  };

  const closeMenu = event => {
    if (!dropdownMenu.current.contains(event.target)) {
      setIsUserOpen(false);
      document.removeEventListener("click", closeMenu);
    }
  };

  return (
    <HeaderArea>
      <h1>
        <Link to="/paaponda/home">PaaponDa</Link>
      </h1>

      <form>
        <input type="text" placeholder="Search" />
        <button>
          <FaSearch />
        </button>
      </form>

      <User onClick={showMenu}>
        <Avatar src={UserAvatar} alt="user avatar" />
        <UserName>Shahan</UserName>

        <Ul isActive={isUserOpen} ref={dropdownMenu}>
          <Li>Logout</Li>
        </Ul>
      </User>
    </HeaderArea>
  );
};

export default Header;

const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const UserName = styled.span`
  padding-left: 0.3rem;
`;

const Ul = styled.ul`
  position: absolute;
  top: 120%;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0.0625);
  background-color: #fff;
  width: 10rem;
  border-radius: 0.2rem;
  z-index: 999;
  opacity: ${props => (props.isActive ? "1" : "0")};
  visibility: ${props => (props.isActive ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out 0s;
  list-style: none;
`;
const Li = styled.li`
  padding: 1rem;
`;
