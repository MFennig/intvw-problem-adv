import { BaseModel } from 'sjs-base-model';
import ICartItem from './ICartItem';

/**
 * Returned API Response Example
 * {
 *   "100": {
    cartId: 100,
    cartItems: [
      {
        cartItemId: 78,
        description: "PING Stretch Webbing Belt",
        quantity: 2
      },
      {
        cartItemId: 56,
        description: "Sol Visor",
        quantity: 3
      }
    ]
  }
 * }
 */

export default class CartResponseModel extends BaseModel {
  // public readonly cartId: number = 0;
  public readonly cartItems: ICartItem[] | null;

  constructor(data) {
    super();
    this.update(data);
  }
}
