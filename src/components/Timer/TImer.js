import React, { Fragment, useEffect, useState } from "react";

import classes from "./Timer.module.scss";

import FlipContainer from "../FlipClock/FlipContainer";

const Timer = () => {
  // total seconds left
  let totalSeconds;

  // creating an object that acts as a state
  const [timeLeft, setTimeLeft] = useState({
    day: 0,
    daysShuffle: true,
    hour: 0,
    hoursShuffle: true,
    minute: 0,
    minutesShuffle: true,
    second: 0,
    secondsShuffle: true,
  });

  // function for calculating time left
  const calculateTimeLeft = () => {
    // diff in time in seconds
    totalSeconds = Math.trunc((new Date("04.18.2022") - new Date()) / 1000);

    // inputting time
    const timeLeftNow = {
      day: String(Math.trunc(totalSeconds / (60 * 60 * 24))).padStart(2, 0),
      hour: String(Math.trunc((totalSeconds / (60 * 60)) % 24)).padStart(2, 0),
      minute: String(Math.trunc((totalSeconds / 60) % 60)).padStart(2, 0),
      second: String(Math.trunc(totalSeconds % 60)).padStart(2, 0),
    };

    // comparing state day and present day
    if (timeLeft.day !== timeLeftNow.day) {
      setTimeLeft((prevState) => {
        const day = timeLeftNow.day;
        // console.log(timeLeft);
        const daysShuffle = !timeLeft.daysShuffle;
        return {
          ...prevState,
          day,
          daysShuffle,
        };
      });
    }

    // comparing state hour and present hour
    if (timeLeft.hour !== timeLeftNow.hour) {
      setTimeLeft((prevState) => {
        const hour = timeLeftNow.hour;
        // console.log(timeLeft);
        const hoursShuffle = !timeLeft.hoursShuffle;
        return {
          ...prevState,
          hour,
          hoursShuffle,
        };
      });
    }

    // comparing state minute and present minute
    if (timeLeft.minute !== timeLeftNow.minute) {
      setTimeLeft((prevState) => {
        const minute = timeLeftNow.minute;
        // console.log(timeLeft);
        const minutesShuffle = !timeLeft.minutesShuffle;
        return {
          ...prevState,
          minute,
          minutesShuffle,
        };
      });
    }

    // comparing state second and present second
    if (timeLeft.second !== timeLeftNow.second) {
      setTimeLeft((prevState) => {
        const second = timeLeftNow.second;
        const secondsShuffle = !timeLeft.secondsShuffle;
        return {
          ...prevState,
          second,
          secondsShuffle,
        };
      });
    }
  };

  // using useEffect to call the calcTimeLeft function every second
  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 950);

    return () => {
      clearInterval(timer);
    };
  });

  // destructuring time
  const {
    day,
    hour,
    minute,
    second,
    daysShuffle,
    hoursShuffle,
    minutesShuffle,
    secondsShuffle,
  } = timeLeft;

  return (
    <Fragment>
      <div className={classes.flipClock}>
        <div className={classes.timeBox}>
          <FlipContainer unit={"day"} digit={day} shuffle={daysShuffle} />
          <p>DAY</p>
        </div>
        <div className={classes.timeBox}>
          <FlipContainer unit={"hour"} digit={hour} shuffle={hoursShuffle} />
          <p>HOUR</p>
        </div>
        <div className={classes.timeBox}>
          <FlipContainer
            unit={"minute"}
            digit={minute}
            shuffle={minutesShuffle}
          />
          <p>MINUTE</p>
        </div>
        <div className={classes.timeBox}>
          <FlipContainer
            unit={"second"}
            digit={second}
            shuffle={secondsShuffle}
          />
          <p>SECOND</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Timer;
