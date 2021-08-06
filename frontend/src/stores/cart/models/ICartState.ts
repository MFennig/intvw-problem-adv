import CartResponseModel from './CartResponseModel';

export default interface ICartState {
  readonly cartItems: CartResponseModel | null;
}
