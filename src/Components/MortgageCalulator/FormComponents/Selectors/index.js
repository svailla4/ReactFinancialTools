/* @flow */
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import * as React from 'react';
import {withHandlers, withState, defaultProps, compose, withProps, mapProps} from 'recompose';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {terms} from './Data/index'
import type { HOC } from 'recompose'

type Props ={
  // options: Array<React.Element<typeof string>>,
}

const options = Object.keys(terms).map(key=>
  <option value={key}>{terms[key]}</option>
)

const BaseComponent = ({options})=>
        <FormControl>
           <InputLabel htmlFor="terms">Terms and Interest Rate</InputLabel>
           <Select
             native>
             {options}
           </Select>
       </FormControl>

const TermComponent: HOC<*, Props> = compose(
  mapProps((props)=> {options: options}
  )
)(BaseComponent)


export default BaseComponent;
