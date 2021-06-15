import React from 'react';
import { CardDescription } from 'semantic-ui-react';
import CartItem from './CartItem';
import styles from './CartItemList.module.scss';

const CartItemList = ({ cartItems }) => {
  function displayCartItems(cartItems: any) {
    let newCartItems = [];
    console.log('hey');
    var x;
    for (x = 0; x < cartItems.length; x++) {
      var y: any = cartItems;
      var d = y[x].description;
      var q = y[x].quantity;
      var i = y[x].cartItemId;

      console.log({ y, d, q, i });
      newCartItems.push(<CartItem quantity={q} description={d} />);
    }
    return newCartItems;
    console.log(x);
  }
  console.log(cartItems);
  return (
    <div className={styles.itemList}>
      <div>
        <strong>Description</strong>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Quantity </strong>
      </div>
      {displayCartItems(cartItems)}
    </div>
  );
};

export default CartItemList;
