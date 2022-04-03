import React from "react";

import classes from "./StaticCard.module.scss";

const StaticCard = ({ position, digit }) => {
  return (
    <div className={classes[position]}>
      <span>{digit}</span>
    </div>
  );
};

export default StaticCard;
