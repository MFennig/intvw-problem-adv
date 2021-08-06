import { RouterState } from 'connected-react-router';
import IErrorState from '../stores/error/models/IErrorState';
import IToastsState from '../stores/toasts/models/IToastsState';

export default interface IStore {
  readonly error: IErrorState;
  readonly router: RouterState;
  readonly toasts: IToastsState;
}
