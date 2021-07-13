import React from "react";
import classes from "./Header.module.css";

import bannerImg from "../../assets/banner.jpg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Cafe-Direct</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImg} alt="Bags of Coffee" />
      </div>
    </>
  );
};

export default Header;
