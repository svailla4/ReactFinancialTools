/* @flow */
import {removeNonNumberCharacters} from '../utils/stringUtils'

export const addMortgageAmount = (amount: string) =>{
  let numberAmount:number = Number(removeNonNumberCharacters(amount))
  return{
    type: 'ADD_MORTGAGE_AMOUNT',
    amount: numberAmount
  }
}

export const addMortgageAmortization = (amortization: string) =>{
  let numberAmortization:number = Number(removeNonNumberCharacters(amortization))
  return{
    type: 'ADD_MORTGAGE_AMORTIZATION',
    amortization: numberAmortization
  }
}

export const addMortgageRate = (rate: string) =>{
  let numberRate:number = Number(removeNonNumberCharacters(rate))
  return{
    type: 'ADD_MORTGAGE_RATE',
    rate: numberRate
  }
}
//TODO add code to format the mortgage frequency
export const addMortgageFrequency= (frequency: string) =>{
  return{
    type: 'ADD_MORTGAGE_FREQUENCY ',
    frequency
  }
}
//TODO add code to format the mortgage term
export const addMortgageTerm = (term: string) =>{
  return{
    type: 'ADD_MORTGAGE_TERM',
    term
  }
}
