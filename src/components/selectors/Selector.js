/* @flow */
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import * as React from 'react';
import {withHandlers, withState, defaultProps, compose, withProps, mapProps} from 'recompose';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {terms, frequency, amortization} from './Data/index'
import type { HOC } from 'recompose'
import styled from 'styled-components'

type Props ={
  options: React.Node,
  label: string
}

const mapOptions =(data)=> Object.keys(data).map(key=>
  <option value={key} key={key}>{data[key]}</option>
)

const arrayType = mapOptions

const StyledFormControl = styled(FormControl)`
  width: 200px;
`

const BaseComponent = ({options, label})=>
        <StyledFormControl>
           <InputLabel htmlFor="terms">{label}</InputLabel>
           <Select
             native>
             {options}
           </Select>
       </StyledFormControl>

const TermComponent: HOC<*, Props> = compose(
  defaultProps({
    options: mapOptions(terms)
  })
)(BaseComponent)

const FrequencyComponent: HOC<*, Props> = compose(
  defaultProps({
    options: mapOptions(frequency)
  })
)(BaseComponent)

const AmortizationComponent: HOC<*, Props> = compose(
  defaultProps({
    options: mapOptions(amortization)
  })
)(BaseComponent)


export {
  FrequencyComponent,
  TermComponent,
  AmortizationComponent
}
