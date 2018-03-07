/* @flow */
import * as React from 'react';
import {compose, defaultProps} from 'recompose';
import type { HOC } from 'recompose'
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import styled from "styled-components";

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

const StyledFormControl = styled(FormControl)`
  width: 200px;
`


const BaseComponent = ({onBlur, OnBlurReduxChange, onFocus, onChange, value, label, startAdornment, endAdornment})=>
<StyledFormControl>
  <InputLabel htmlFor="amount">{label}</InputLabel>
  <Input
    value={value}
    onChange={onChange}
    onBlur={(e)=>{onBlur(e); OnBlurReduxChange(e.target.value)}}
    onFocus={onFocus}
    startAdornment={<InputAdornment position={startAdornment.position}>{startAdornment.text}</InputAdornment>}
    endAdornment={<InputAdornment position={endAdornment.position}>{endAdornment.text}</InputAdornment>}
  />
</StyledFormControl>

let EnhancedComponent: HOC <*,Props> = compose(
  defaultProps({
    startAdornment: {position: undefined, text: ""},
    endAdornment: {position: undefined, text: ""},
  }),
)(BaseComponent)


export default EnhancedComponent;
