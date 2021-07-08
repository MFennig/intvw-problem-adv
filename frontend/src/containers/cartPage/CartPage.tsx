import styles from './CartPage.module.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Icon, Header } from 'semantic-ui-react';
import CartItemList from './components/CartItemList';
import { Dispatch } from 'redux';
import CartAction from 'stores/cart/CartAction';
import IStore from 'models/IStore';
import CartResponseModel from 'stores/cart/models/CartResponseModel';
import ToastsAction from 'stores/toasts/ToastsAction';
import ToastStatusEnum from 'constants/ToastStatusEnum';

const CartPage = () => {
  const cartResponse: CartResponseModel[] = useSelector((state: IStore) => state.cart.cartResponse);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const dispatch: Dispatch = useDispatch();

  const cartConfig: any = {
    id: 101,
  };

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
            {' '}
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
