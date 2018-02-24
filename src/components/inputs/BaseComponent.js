/* @flow */
import * as React from 'react';
import {compose, defaultProps} from 'recompose';
import type { HOC } from 'recompose'
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

type Props = {
  value: string,
  label: string,
  startAdornment: {position:string, text: string},
  endAdornment: {position:string, text: string},
  onBlur?: ()=>void,
  OnBlurReduxChange?: ()=>void,
  onFocus?: ()=>void,
  onChange: ()=>void
}

const BaseComponent = ({onBlur, OnBlurReduxChange, onFocus, onChange, value, label, startAdornment, endAdornment})=>
<FormControl>
  <InputLabel htmlFor="amount">{label}</InputLabel>
  <Input
    value={value}
    onChange={onChange}
    onBlur={()=>{onBlur; OnBlurReduxChange}}
    onFocus={onFocus}
    startAdornment={<InputAdornment position={startAdornment.position}>{startAdornment.text}</InputAdornment>}
    endAdornment={<InputAdornment position={endAdornment.position}>{endAdornment.text}</InputAdornment>}
  />
</FormControl>

let EnhancedComponent: HOC <*,Props> = compose(
  defaultProps({
    startAdornment: {position: undefined, text: ""},
    endAdornment: {position: undefined, text: ""},
  }),
)(BaseComponent)


export default EnhancedComponent;
