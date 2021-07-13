import React from "react";
import classes from "./Header.module.css";

import bannerImg from "../../assets/banner.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Cafe-Direct</h1>
        <HeaderCartButton onClick={onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImg} alt="Bags of Coffee" />
      </div>
    </>
  );
};

export default Header;
