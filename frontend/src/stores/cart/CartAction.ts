import CartResponseModel from './models/cart/CartResponseModel';
import CartEffect from './CartEffect';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';
import { ReduxDispatch } from 'models/ReduxProps';
import IStore from 'models/IStore';
import ActionUtility from 'utilities/ActionUtility';

type ActionUnion = void | HttpErrorResponseModel | CartResponseModel;

export default class CartAction {
  public static readonly REQUEST_CART: string = 'CartAction.REQUEST_CART';
  public static readonly REQUEST_CART_FINISHED: string = 'CartAction.REQUEST_CART_FINISHED';

  public static requestCart(cartId): any {
    return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore) => {
      await ActionUtility.createThunkEffect<CartResponseModel>(dispatch, CartAction.REQUEST_CART, CartEffect.requestCart, cartId);
    };
  }
}
