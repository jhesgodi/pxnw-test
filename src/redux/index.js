import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import SagaManager from '../sagas/index';
import rootReducer from './rootReducer';

/* ---------------- Setup Middlewares & Enhancers ---------------- */
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);
const reactDebuggerEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const storeEnhancers = [
  middlewareEnhancer,
  reactDebuggerEnhancer,
  /* Add more here */
];

/**
 * Configure Store with middleware and enhancers
 */
export default function configureStore() {
  const store = createStore(rootReducer, compose(...storeEnhancers));

  SagaManager.startSagas(sagaMiddleware);

  if (__DEV__) {
    if (module.hot) {
      module.hot.accept('./rootReducer', () =>
        store.replaceReducer(require('./rootReducer').default),
      );

      module.hot.accept('../sagas/index', () => {
        SagaManager.cancelSagas(store);
        require('../sagas/index').default.startSagas(sagaMiddleware);
      });
    }
  }

  return store;
}
