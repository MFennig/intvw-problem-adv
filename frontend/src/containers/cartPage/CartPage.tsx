import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Icon, Header } from 'semantic-ui-react';
import styles from './CartPage.module.scss';
import IStore from 'models/IStore';
import CartItemList from './components/CartItemList';
import CartAction from 'stores/cart/CartAction';
import CartResponseModel from 'stores/cart/models/CartResponseModel';
import ToastsAction from 'stores/toasts/ToastsAction';
import ToastStatusEnum from 'constants/ToastStatusEnum';

export interface ICartConfig {
  id: number;
}

const CartPage = () => {
  const cartResponse: CartResponseModel[] = useSelector((state: IStore) => state.cart.cartResponse);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const dispatch: Dispatch = useDispatch();

  const cartConfig: ICartConfig = {
    id: 102,
  };

  // Can also do a useEffect instead of click event
  // useEffect(() => {
  //   dispatch(CartAction.requestProductById(cartConfig.id))
  // }, []);

  const buttonClick = () => {
    setIsLoading(true);
    dispatch(CartAction.requestProductById(cartConfig.id))
      .then(() => {
        dispatch(ToastsAction.add('Successfully retrieved cart items.', ToastStatusEnum.Success));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Divider horizontal={true}>
        <Header as="h4">
          <Icon name="cart" onClick={buttonClick}>
            Cart
          </Icon>
        </Header>
      </Divider>
      {cartResponse && !isLoading && !isError && <CartItemList cartItems={cartResponse} />}
      {isError && <p>An error occured. Please try again.</p>}
    </div>
  );
};

export default CartPage;
