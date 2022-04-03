import React from "react";

import classes from "./App.module.scss";
import Timer from "./components/Timer/TImer";
import Icons from "./components/UI/Icons";

const App = () => {
  return (
    <React.StrictMode>
      <main>
        <h1>we're launching soon</h1>
        <div className={classes.content}>
          <Timer />
        </div>
        <div className={classes.footer}>
          <Icons />
        </div>
      </main>
    </React.StrictMode>
  );
};

export default App;
