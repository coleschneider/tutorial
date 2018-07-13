import React from "react";
import {render} from "react-dom";
import App from './components/App'
import "./style.scss";

import {AppContainer} from "react-hot-loader";


render(
  <AppContainer>
  <App />
  </AppContainer>,
  document.getElementById("root")
)

if(module.hot){
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default;

    render(
        <AppContainer>
           
               <NewApp />
        
        </AppContainer>,
        document.getElementById("root")
    );
});
}