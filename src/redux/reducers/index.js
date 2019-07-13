import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigation from './../../navigations/Router';
import regis from './register';
import quest from './questions';

const router = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router,
  regis,
  quest
})

export default appReducer