/* @flow */
import {withHandlers, withState, defaultProps, compose} from 'recompose';
import BaseComponent from './BaseComponent'
import {validInterestRateFormat, formatInterestRate} from '../../utils/stringUtils';

let EnhancedComponent = compose(
  defaultProps({
    endAdornment: {position: "start", text: "%"}
  }),
  withState('value', 'updateValue', "3.00"),
  withHandlers({
    onChange: props => event => {
      let value:string = event.target.value;
      if(validInterestRateFormat(value)){
        props.updateValue(event.target.value)
      }
    },
    onBlur: props => event => {
      props.updateValue(formatInterestRate(event.target.value))
    },
    onFocus: props => event => {
      // props.updateValue(removeNonNumberCharacters(event.target.value))
    }})
  )(BaseComponent)

export default EnhancedComponent;
