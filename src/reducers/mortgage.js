/* @flow */

const initialState = {
  amount: 100000,
  frequency: '12',
  term: '5yf',
  rate: 3.00,
  amortization: 25
}


export type State ={
  amount: number,
  amortization: number,
  rate: number,
  frequency: string,
  term: string
}

type Action = {type:'ADD_MORTGAGE_AMOUNT', amount: number}
            | {type:'ADD_MORTGAGE_AMORTIZATION', amortization: number}
            | {type:'ADD_MORTGAGE_RATE', rate: number}
            | {type:'ADD_MORTGAGE_TERM', term: string}
            | {type:'ADD_MORTGAGE_FREQUENCY', frequency: string}

const mortgage = (state: State = initialState, action : Action)=>{
  switch(action.type){
    case 'ADD_MORTGAGE_AMOUNT':
    console.log("adding amount")
      return {
        ...state ,
        amount:  action.amount
      }
    case 'ADD_MORTGAGE_AMORTIZATION':
        console.log("adding amortization")
      return{
        ...state,
        amortization: action.amortization
      }
    case 'ADD_MORTGAGE_TERM':
      return{
        ...state,
        term: action.term
      }
    case 'ADD_MORTGAGE_RATE':
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

export default mortgage
