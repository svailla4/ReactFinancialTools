/* @flow */
import React from 'react';
import {Flex, Item} from '../FlexBox';
import MortgageInput from './FormComponents/Inputs/MoneyInput'
import InterestRateInput from './FormComponents/Inputs/InterestRateInput'
import TermAndInterest from './FormComponents/Selectors/index'



const FlexForm = Flex.extend`
  padding: 1.0em
`

class MortgageForm extends React.Component{
  render(){
    return(
      <Flex flexDirection="column">
        <MortgageInput label="Mortgage Amount"/>
        <InterestRateInput label="Term and Type" />
        <TermAndInterest/>

      </Flex>
          )
        }

}

export default MortgageForm;
