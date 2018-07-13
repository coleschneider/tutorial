import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from 'redux-logger';


export default () => {
  
  


  const store = createStore(reducer, applyMiddleware(logger));
  

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      store.replaceReducer(require('../reducer').default);
    });
  }

  return store;
}
