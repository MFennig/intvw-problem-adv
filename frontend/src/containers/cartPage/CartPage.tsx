import styles from './CartPage.module.scss';

import React from 'react';
import { Divider, Icon, Header } from 'semantic-ui-react';
import CartItemList from './components/CartItemList';

interface IProps {}

export default function CartPage(props: React.PropsWithChildren<IProps>): React.FunctionComponentElement<IProps> {
  return (
    <div className={styles.wrapper}>
      <Divider horizontal={true}>
        <Header as="h4">
          <Icon name="cart" /> Cart
        </Header>
      </Divider>
    </div>
  );
}
