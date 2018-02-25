/* @flow */
import React from 'react';
import {Flex, Item} from '../FlexBox';
import MortgageAmountInput from '../../containers/MortgageAmount'
import MortgageRateInput from '../../containers/MortgageRate'



const FlexForm = Flex.extend`
  padding: 1.0em
`

class MortgageForm extends React.Component{
  render(){
    return(
      <Flex flexDirection="column">
        <MortgageAmountInput label="Mortgage Amount"/>
        <MortgageRateInput label="Interest Rate" />
      </Flex>
          )
        }

}

export default MortgageForm;
