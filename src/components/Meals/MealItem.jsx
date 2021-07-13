import React from "react";
import classes from "./MealItem.module.css";

const MealItem = ({ name, id, description, price }) => {
  return (
    <div className={classes.meal}>
      <h3>{name}</h3>
      <p className={classes.description}>{description}</p>
      <p className={classes.price}>{price}</p>
    </div>
  );
};

export default MealItem;
