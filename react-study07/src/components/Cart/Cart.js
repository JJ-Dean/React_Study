import React from "react";

import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1', name: '초밥', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}</ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>총 수량</span>
                <span>25.98</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>닫기</button>
                <button className={classes.button}>주문하기</button>
            </div>
        </Modal>
    )
}

export default Cart;