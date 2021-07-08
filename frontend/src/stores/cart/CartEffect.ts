import environment from 'environment';
import CartResponseModel from './models/cart/CartResponseModel';
import EffectUtility from 'utilities/EffectUtility';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';

export default class CartEffect {
  public static async requestCart(cartId: number): Promise<CartResponseModel | HttpErrorResponseModel> {
    const endpoint: string = `${environment.api.cart}/${cartId}`;

    return EffectUtility.getToModel<CartResponseModel>(CartResponseModel, endpoint);
  }
}
