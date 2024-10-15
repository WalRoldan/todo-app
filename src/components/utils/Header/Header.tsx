
import React from "react";
import "./Header.css";
import MenuIcon from "../MenuIcon/MenuIcon";
import SearchIcon from "../SearchIcon/SearchIcon";
import Logo from "../Logo/Logo";
import UserIcon from "../UserIcon/UserIcon";
import CartIcon from "../CartIcon/CartIcon";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <MenuIcon />
        <SearchIcon />
        <Logo />
        <UserIcon/>
        <CartIcon/>
      </div>
    </header>
  );
};

export default Header;

