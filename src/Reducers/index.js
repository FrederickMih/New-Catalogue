import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import articleReducer from './newsArticlesReducer';
import searchLoadingReducer from './searchLoadingReducers';
import filterReducer from './filterReducer';

const middleware = [thunk];
const initialState = {};

// eslint-disable-next-line max-len
export const rootReducer = combineReducers({ articles: articleReducer, searchLoadingReducer, filter: filterReducer });

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
