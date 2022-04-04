import React from "react";
import AnimatedCard from "./AnimatedCard";
import StaticCard from "./StaticCard";

import classes from "./FlipContainer.module.scss";

const FlipContainer = ({ digit, shuffle }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = String(+digit + 1).padStart(2, 0);

  //   shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  //   shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className={classes.flipUnitContainer}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

export default FlipContainer;
