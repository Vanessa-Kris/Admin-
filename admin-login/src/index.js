import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginComp from './components/LoginComp';
import FunctionalComp from './components/FunctionalComp';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//import reportWebVitals from './reportWebVitals';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionalComp></FunctionalComp>
        <LoginComp></LoginComp>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

