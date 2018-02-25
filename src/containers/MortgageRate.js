/* @flow */
import { connect } from 'react-redux'
import { addMortgageRate} from '../actions'
import InterestRateInput from '../components/inputs/InterestRateInput'
 
const mapDispatchToProps = dispatch => {
  return {
    OnBlurReduxChange: amount => {
      dispatch(addMortgageRate(amount))
    }
  }
}

const InputMortgageRate = connect(
  mapDispatchToProps
)(InterestRateInput)
 
export default InputMortgageRate
