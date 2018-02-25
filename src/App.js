/* @flow */
import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import MortgageForm from './components/MortgageCalulator/MortgageForm';
import financialToolApp from './reducers/index';


let store = createStore(financialToolApp)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Reboot/>
          <MortgageForm/>
        </div>
    </Provider>
    );
  }
}

export default App;
