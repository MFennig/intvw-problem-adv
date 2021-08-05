import HttpErrorResponseModel from 'models/HttpErrorResponseModel';
import IStore from 'models/IStore';
import { ReduxDispatch } from 'models/ReduxProps';
import ActionUtility from 'utilities/ActionUtility';
import CartEffect from './CartEffect';
import CartResponseModel from './models/CartResponseModel';

type ActionUnion = void | HttpErrorResponseModel | CartResponseModel;

export default class CartAction {
  public static readonly REQUEST_PRODUCT: string = 'CartAction.REQUEST_PRODUCT';
  public static readonly REQUEST_PRODUCT_FINISHED: string = 'CartAction.REQUEST_PRODUCT_FINISHED';

  public static requestProductById(cartId) {
    return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore) => {
      /*
      Utilize createThunkEffect method from ActionUtility and pass the following parameters 
      dispatch
      action
      effect method (api call)
      */
      await ActionUtility.createThunkEffect<P>();
    };
  }
}
