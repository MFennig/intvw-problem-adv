import React, { Suspense, lazy } from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import IAction from '../models/IAction';
import RouteEnum from '../constants/RouteEnum';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import Toasts from './components/toasts/Toasts';

const HomePage = lazy(() => import('./cartPage/CartPage'));

interface IProps {
  readonly history: History;
  readonly dispatch: Dispatch<IAction<any>>;
}

export default function App(props: React.PropsWithChildren<IProps>): JSX.Element {
  return (
    <ConnectedRouter history={props.history}>
      <Suspense fallback={<LoadingIndicator isActive={true} />}>
        <Switch>
          <Route exact={true} path={RouteEnum.CartPage} component={HomePage} />
        </Switch>
        <Toasts />
      </Suspense>
    </ConnectedRouter>
  );
}
