import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import contactReducer from './reducers/contactReducer';

const rootReducer = combineReducers({
  contactReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
