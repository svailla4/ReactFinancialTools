/* @flow */
import { connect } from 'react-redux'
import {addMortgageAmount} from '../actions'
import MoneyInput from '../components/inputs/MoneyInput'
 
const mapDispatchToProps = dispatch => {
  return {
    OnBlurReduxChange: amount => {
      dispatch(addMortgageAmount(amount))
    }
  }
}

const InputMortgageAmount = connect(
  mapDispatchToProps
)(MoneyInput)
 
export default InputMortgageAmount
