import styles from './CartPage.module.scss';

import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { Divider, Icon, Header } from 'semantic-ui-react';
import CartItemList from './components/CartItemList';
import { useDispatch, useSelector } from 'react-redux';
import CartAction from 'stores/cart/CartAction';
import IStore from 'models/IStore';

interface IProps {}

export default function CartPage(props: React.PropsWithChildren<IProps>): React.FunctionComponentElement<IProps> {
  const dispatch: Dispatch = useDispatch();
  const cartItems = useSelector((state: IStore) => state.cart?.cart?.data?.cartItems);
  useEffect(() => {
    dispatch(CartAction.requestCart(101));
  }, []);
  return (
    <div className={styles.wrapper}>
      <Divider horizontal={true}>
        <Header as="h4">
          <Icon name="cart" /> Cart
        </Header>
      </Divider>
      {cartItems && <CartItemList cartItems={cartItems} />}
    </div>
  );
}
