import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Switch, Route,} from 'react-router-dom';

import DisplayMore from './components/display_more';
import App from './containers/app';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';


const router = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/persons/:personId" exact component={DisplayMore} />
        <Route render={() => <p> 404 Page not found</p>} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.querySelector('.container'));

const createStoreWithMiddleware = applyMiddleware(ReduxPromise )(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
