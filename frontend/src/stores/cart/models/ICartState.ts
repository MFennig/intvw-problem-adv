import CartResponseModel from './CartResponseModel';

export default interface ICartState {
  readonly cart: CartResponseModel | null;
}
