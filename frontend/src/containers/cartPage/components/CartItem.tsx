import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = ({ description, quantity }) => {
  console.log(quantity);
  console.log(description);
  return (
    <>
      <div className={styles.description}>{description}</div>
      <div className={styles.quantity}>{quantity}</div>
    </>
  );
};

export default CartItem;
