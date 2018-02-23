/* @flow */
import {withHandlers, withState, defaultProps, compose} from 'recompose';
import BaseComponent from './BaseComponent'
import {removeNonNumberCharacters, formatNumber} from '../Utils/StringUtils';

let EnhancedComponent = compose(
  defaultProps({
    startAdornment: {position: "start", text: "$"}
  }),
  withState('value', 'updateValue', '100,000'),
  withHandlers({
    onChange: props => event => {
      props.updateValue(removeNonNumberCharacters(event.target.value))
    },
    onBlur: props => event => {
      props.updateValue(formatNumber(event.target.value))
    },
    onFocus: props => event => {
      props.updateValue(removeNonNumberCharacters(event.target.value))
    }})
  )(BaseComponent)

export default EnhancedComponent;
