import React from 'react';
import ICartItem from 'stores/cart/models/ICartItem';
import CartItem from './CartItem';
import styles from './CartItemList.module.scss';
// import { Card } from 'semantic-ui-react';

const CartItemList = ({ cartItems }) => {
  return (
    <div className={styles.primaryItemContainer}>
      <div className={styles.header}>
        <p>Description</p>
      </div>
      <div className={styles.header}>
        <p>Quantity</p>
      </div>
      {cartItems.cartItems.map((item: ICartItem) => {
        return (
          <CartItem key={item.cartItemId} description={item.description} quantity={item.quantity} />
          // <Card header='Description' description={item.description} extra={item.quantity}/>
        );
      })}
    </div>
  );
};

export default CartItemList;
