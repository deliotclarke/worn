import { combineReducers } from 'redux';

const reducer = (state = { name: 'Eliot' }, action: any) => {
  return state;
};

export const rootReducer = combineReducers({ state: reducer });
