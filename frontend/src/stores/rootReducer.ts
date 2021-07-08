import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import IStore from '../models/IStore';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import ToastsReducer from './toasts/ToastsReducer';
import CartReducer from './cart/CartReducer';

export default function rootReducer(history: History): Reducer<IStore> {
  const reducerMap: ReducersMapObject<IStore> = {
    cart: new CartReducer().reducer,
    error: errorReducer.reducer,
    requesting: requestingReducer,
    router: connectRouter(history) as any,
    toasts: new ToastsReducer().reducer,
  };

  return combineReducers(reducerMap);
}
