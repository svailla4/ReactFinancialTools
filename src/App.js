import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import MortgageForm from './Components/MortgageCalulator/MortgageForm.js'
import {createStore} from 'redux';
import { Provider } from 'react-redux'


let store = createStore() // TODO add reducers

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
