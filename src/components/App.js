import React from "react";
import {render} from "react-dom";
import {connect} from 'react-redux'


const increment = () => ({
  type: "DECREMENT"
})
const App = (props) => (
  <button onClick={() => props.increment()}>
    {props.counter}
    Button
  </button>
)



export default connect(state => ({...state}), {increment})(App)