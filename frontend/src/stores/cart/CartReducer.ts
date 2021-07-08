import IAction from 'models/IAction';
import BaseReducer from 'utilities/BaseReducer';
import CartAction from './CartAction';
import CartResponseModel from './models/CartResponseModel';
import ICartState from './models/ICartState';

export default class CartReducer extends BaseReducer<ICartState> {
  public readonly initialState: ICartState = {
    cartResponse: [],
  };

  public [CartAction.REQUEST_PRODUCT](state: ICartState, action: IAction<CartResponseModel>): any {
    return {
      ...state,
      cartResponse: action.payload,
    };
  }

  public [CartAction.REQUEST_PRODUCT_FINISHED](state: ICartState, action: IAction<CartResponseModel>): any {
    return {
      ...state,
      cartResponse: action.payload,
    };
  }
}
