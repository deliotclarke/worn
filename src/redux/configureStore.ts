import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootEpic } from './epics';
import { rootReducer } from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 30 });

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
