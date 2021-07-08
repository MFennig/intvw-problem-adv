import ICartState from './models/ICartState';
import CartAction from './CartAction';
import CartResponseModel from './models/cart/CartResponseModel';
import IAction from 'models/IAction';
import BaseReducer from 'utilities/BaseReducer';

export default class CartReducer extends BaseReducer<ICartState> {
  public readonly initialState: ICartState = {
    cart: null,
  };

  public [CartAction.REQUEST_CART_FINISHED](state: ICartState, action: IAction<CartResponseModel>): ICartState {
    return {
      ...state,
      cart: action.payload!,
    };
  }
}
