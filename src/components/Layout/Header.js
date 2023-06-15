import { Fragment } from "react";

import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Candy store</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        
      </header>

      {/* <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A delicious pizza" />
      </div> */}
    </Fragment>
  );
}