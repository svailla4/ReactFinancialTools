import * from ../StringUtils

const initialState = {
  amount: '100,000',
  frequency: '12'
  term: '5yf',
  rate: '3.00'
  amortization: '25'
}

const mortgage = (state = initialState, action)=>{
  switch(action.type){
    case 'ADD_MORTGAGE_AMOUNT':
      return {
        ...state ,
        amount:  action.amount
      }
    case 'ADD_MORTGAGE_AMORTIZATION':
      return{
        ...state,
        amortization: action.amortization
      }
    case 'ADD_MORTGAGE_TERM':
      return{
        ...state,
        term: action.term
      }
    case: 'ADD_MORTGAGE_RATE':
      return{
        ...state,
        rate: action.rate
      }
    case 'ADD_MORTGAGE_FREQUENCY':
    return{
      ...state,
      frequency: action.frequency
    }

    default:
      return state
  }
}
