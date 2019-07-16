import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigation from './../../navigations/Router';
import regis from './register';
import quest from './questions';
import answer from './answer';

const router = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router,
  regis,
  quest,
  answer
})

export default appReducer