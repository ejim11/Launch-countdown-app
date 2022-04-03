import React, { Fragment } from "react";

import classes from "./Icons.module.scss";

import icons from "../../assets/sprite.svg";

const Icons = () => {
  return (
    <Fragment>
      <a href="http://facebook.com">
        <svg className={classes.icon}>
          <use xlinkHref={`${icons}#icon-facebook`}></use>
        </svg>
      </a>
      <a href="http://pinterest.com">
        <svg className={classes.icon}>
          <use xlinkHref={`${icons}#icon-pinterest-with-circle`}></use>
        </svg>
      </a>
      <a href="http://instagram.com">
        <svg className={classes.icon}>
          <use xlinkHref={`${icons}#icon-instagram`}></use>
        </svg>
      </a>
    </Fragment>
  );
};

export default Icons;
