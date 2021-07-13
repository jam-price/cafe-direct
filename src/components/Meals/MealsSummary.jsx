import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Ethical, Single Origin Coffee to your door!</h2>
      <p>
        Find your perfect blend, roasted to perfection and delivered to you
        speedily!
      </p>
      <p>
        We hand pick our coffee from out favourite regions across the world and
        bring it to you. Ethical, Delicious, Fast!
      </p>
    </section>
  );
};

export default MealsSummary;
