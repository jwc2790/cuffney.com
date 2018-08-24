import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import page from './actions/page/reducer';

const rootReducer = combineReducers({
  page,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk),
);
