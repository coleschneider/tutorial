import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from 'redux-logger';


export default () => {
  
  
console.log("using prod configurestore")

  const store = createStore(reducer);
  

  return store;
}
