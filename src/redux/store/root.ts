import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

const reducer = (state = { name: 'Eliot' }, action: any) => {
  return state;
};

export const rootEpic = combineEpics();

export const rootReducer = combineReducers({ reducer });
