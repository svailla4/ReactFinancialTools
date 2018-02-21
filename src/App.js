import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import MortgageForm from './Components/MortgageCalulator/MortgageForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reboot/>
        <MortgageForm/>
      </div>
    );
  }
}

export default App;
