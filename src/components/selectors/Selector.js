/* @flow */
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import * as React from 'react';
import {withHandlers, withState, defaultProps, compose, withProps, mapProps} from 'recompose';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {terms, frequency} from './Data/index'
import type { HOC } from 'recompose'

type Props ={
  options: React.Node,
  label: string
}

const mapOptions:Object =(data)=> Object.keys(data).map(key=>
  <option value={key} key={key}>{data[key]}</option>
)

const arrayType = mapOptions

const BaseComponent = ({options, label})=>
        <FormControl>
           <InputLabel htmlFor="terms">{label}</InputLabel>
           <Select
             native>
             {options}
           </Select>
       </FormControl>

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


export {
  FrequencyComponent,
  TermComponent
}
