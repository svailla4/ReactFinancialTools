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
  onFocus?: ()=>void,
  onChange: ()=>void
}

const BaseComponent = ({onBlur, onFocus, onChange, value, label, startAdornment, endAdornment})=>
<FormControl>
  <InputLabel htmlFor="amount">{label}</InputLabel>
  <Input
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    startAdornment={<InputAdornment position={startAdornment.position}>{startAdornment.text}</InputAdornment>}
    endAdornment={<InputAdornment position={endAdornment.position}>{endAdornment.text}</InputAdornment>}
  />
</FormControl>

let EnhancedComponent: HOC <*,Props> = compose(
  defaultProps({
    startAdornment: {position: "", text: ""},
    endAdornment: {position: "", text: ""},
  }),
)(BaseComponent)


export default EnhancedComponent;
