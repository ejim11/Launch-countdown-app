import React from "react";

import classes from "./AnimatedCard.module.scss";

const AnimatedCard = ({ digit, animation }) => {
  return (
    <div className={`${classes.flipCard} ${classes[animation]}`}>
      <span>{digit}</span>
    </div>
  );
};

export default AnimatedCard;
