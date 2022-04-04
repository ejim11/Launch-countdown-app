import React, { Fragment } from "react";

import classes from "./App.module.scss";
import Timer from "./components/Timer/Timer";
import Icons from "./components/UI/Icons";

const App = () => {
  return (
    <Fragment>
      <main>
        <h1>we're launching soon</h1>
        <div className={classes.content}>
          <Timer />
        </div>
        <div className={classes.footer}>
          <Icons />
        </div>
      </main>
    </Fragment>
  );
};

export default App;
