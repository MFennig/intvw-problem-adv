import CartResponseModel from './CartResponseModel';

export default interface ICartState {
  readonly cartResponse: CartResponseModel[] | null;
}
