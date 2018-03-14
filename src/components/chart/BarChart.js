/* @flow */
import React from 'react';
import {compose} from 'recompose';
import {Flex, Item} from '../FlexBox';
import styled from 'styled-components'
import type {State} from '../../reducers/mortgage'
import {calculateMortgageAmortizations} from '../../utils/financialUtils';
import type {MortgageValues} from '../../utils/financialUtils';

const BarBox = styled.div`
  height:100%;
  width: ${props=>props.width}
`

const Bar = styled.div`
  height: ${props=>props.height}
  background-color: ${props=>props.color}
  width: 100%;
`

type BarItemsProps ={
  amount:number,
  amortization:number,
  width: string,
  payment:number,
  amortizationSchedule:Array<number>
}

const BarItems = ({amount, amortization, width, payment, amortizationSchedule}:BarItemsProps)=>{
  let widthNum:number =Number(width.replace('/[^0-9]+/g', ''));

  const barItems = amortizationSchedule.map((number)=>{
    <BarItem key={number.toString()} height={amount/number * 100} width={widthNum/amortizationSchedule.length}
    color={'black'}/>
  });
  return(
    barItems
  )
}

type BaseComponentProps ={
  height:string,
  width:string,
  color:string,
  state:State
}


const BaseComponent = ({height, width, color, state}:BaseComponentProps)=>{
  const mortgagePaymentAmotizationSchedule:MortgageValues = calculateMortgageAmortizations(state);
  const amount = state.amount;
  const amortization = state.amortization;
  const barItemProps = {amount, amortization, ...mortgagePaymentAmotizationSchedule, width};
  return(
    <Flex flexDirection="row" justifyContent="flex-start" alignItems="flex-end">
      <BarItems {...barItemProps} />
    </Flex>
  )
}


const EnhancedComponent = compose({

  }
)

const BarItem = ({height, color, width})=>{
  <BarBox width={width}>
    <Bar height={height} color={color}/>
  </BarBox>
}
