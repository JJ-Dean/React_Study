import {Fragment} from "react";

import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header;