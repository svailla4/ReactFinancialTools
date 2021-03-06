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

const mapStateToprops = state =>{
  return{
    amount: state.amount
  }
}

const InputMortgageAmount = connect(
  null,
  mapDispatchToProps
)(MoneyInput)
 
export default InputMortgageAmount
