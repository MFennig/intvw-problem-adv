import { ReduxDispatch } from 'models/ReduxProps';
import IStore from 'models/IStore';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';
import CartEffect from './CartEffect';
import CartResponseModel from './models/CartResponseModel';
import ActionUtility from 'utilities/ActionUtility';

export default class CartAction {
  public static readonly REQUEST_PRODUCT: string = 'CartAction.REQUEST_PRODUCT';
  public static readonly REQUEST_PRODUCT_FINISHED: string = 'CartAction.REQUEST_PRODUCT_FINISHED';

  public static requestProductById(cartId: number | null): any {
    return async (dispatch: ReduxDispatch<CartResponseModel | HttpErrorResponseModel>, getState: () => IStore) => {
      if (cartId === null) {
        dispatch({ type: CartAction.REQUEST_PRODUCT_FINISHED, payload: null });
      } else {
        await ActionUtility.createThunkEffect<CartResponseModel>(dispatch, CartAction.REQUEST_PRODUCT, CartEffect.requestCartItem, cartId);
      }
    };
  }
}
