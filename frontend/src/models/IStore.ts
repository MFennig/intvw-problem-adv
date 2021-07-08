import { RouterState } from 'connected-react-router';
import IRequestingState from '../stores/requesting/models/IRequestingState';
import IErrorState from '../stores/error/models/IErrorState';
import IToastsState from '../stores/toasts/models/IToastsState';
import ICartState from 'stores/cart/models/ICartState';

export default interface IStore {
  readonly cart: ICartState;
  readonly error: IErrorState;
  readonly requesting: IRequestingState;
  readonly router: RouterState;
  readonly toasts: IToastsState;
}
