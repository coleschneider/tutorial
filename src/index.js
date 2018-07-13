import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./style.scss";
import configureStore from './configureStore'
import {AppContainer} from "react-hot-loader";
import {Provider} from 'react-redux';
const store = configureStore()

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
          <Component />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}

if(process.env.NODE_ENV !=="production" && module.hot){
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default);
  });
}
render(App);