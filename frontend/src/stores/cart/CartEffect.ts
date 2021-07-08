import environment from 'environment';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';
import EffectUtility from 'utilities/EffectUtility';
import CartResponseModel from './models/CartResponseModel';

export default class CartEffect {
  public static async requestCartItem(cartId: number): Promise<CartResponseModel | HttpErrorResponseModel> {
    // const endpoint = `${(environment.api as any)}/cart/byid/${cartId}`
    const endpoint: string = `http://localhost:5000/cart/byid/${cartId}`;

    return EffectUtility.getToModel<CartResponseModel>(CartResponseModel, endpoint, cartId);
  }
}
