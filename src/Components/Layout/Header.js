import { Fragment } from "react";
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>
        <HeaderCartButton onClick = {props.onCartClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Table Full Of Delicious Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
