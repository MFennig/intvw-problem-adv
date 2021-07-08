import CartResponseModel from './cart/CartResponseModel';

export default interface ICartState {
  readonly cart: CartResponseModel | null;
}
