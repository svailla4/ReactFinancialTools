export const addMortgageAmount = amount =>{
  return{
    type: 'ADD_MORTGAGE_AMOUNT',
    amount
  }
}

export const addMortgageAmortization = amortization =>{
  return{
    type: 'ADD_MORTGAGE_AMORTIZATION',
    amortization
  }
}

export const addMortgageRate = rate =>{
  return{
    type: 'ADD_MORTGAGE_RATE',
    rate
  }
}

export const addMortgageFrequency= frequency =>{
  return{
    type: 'ADD_MORTGAGE_FREQUENCY ',
    frequency
  }
}

export const addMortgageTerm = term =>{
  return{
    type: 'ADD_MORTGAGE_TERM',
    term
  }
}
