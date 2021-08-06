import IAction from 'models/IAction';
import BaseReducer from 'utilities/BaseReducer';
import CartAction from './CartAction';
import CartResponseModel from './models/CartResponseModel';
import ICartState from './models/ICartState';

export default class CartReducer extends BaseReducer<ICartState> {
  public [CartAction.REQUEST_PRODUCT_FINISHED](state: ICartState, action: IAction<CartResponseModel>) {
    /**
     * TODO: Implement reducer and update to new state
     */
  }
}
