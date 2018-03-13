/* @flow */
import React from 'react';
import {Flex, Item} from '../FlexBox';
import MortgageAmountInput from '../../containers/MortgageAmount'
import MortgageRateInput from '../../containers/MortgageRate'
import {TermComponent, AmortizationComponent, FrequencyComponent} from '../selectors/Selector';



const FlexForm = Flex.extend`
  padding: 1.0em
`

class MortgageForm extends React.Component{
  render(){
    return(
      <Flex flexDirection="row">
        <Flex flexDirection="column">
          <MortgageAmountInput label="Mortgage Amount"/>
          <TermComponent label="Term and Type"/>
          <MortgageRateInput label="Interest Rate" />
          <AmortizationComponent label="Amortization"/>
          <FrequencyComponent label="Payment Frequency"/>
        </Flex>
      </Flex>
          )
        }

}

export default MortgageForm;
