import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import IStore from '../models/IStore';
import errorReducer from './error/ErrorReducer';
import ToastsReducer from './toasts/ToastsReducer';

export default function rootReducer(history: History): Reducer<IStore> {
  const reducerMap: ReducersMapObject<IStore> = {
    error: errorReducer.reducer,
    router: connectRouter(history) as any,
    toasts: new ToastsReducer().reducer,
  };

  return combineReducers(reducerMap);
}
