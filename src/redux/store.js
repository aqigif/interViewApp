import { createStore, applyMiddleware } from 'redux';

import middlewares from './middleware';
import appReducer from './reducers/index';

const store = createStore(appReducer, {}, applyMiddleware(...middlewares))

export { store };