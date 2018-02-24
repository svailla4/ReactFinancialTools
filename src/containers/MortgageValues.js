import { connect } from 'react-redux'
import { addMortgageRate, addMortgageTerm, addMortgageAmount,
  addMortgageFrequency, addMortgageAmortization} from '../actions'
import TodoList from '../components/TodoList'
 
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}
 
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    onMortgageAmountBlur: amount => {
      dispatch(addMortgageAmount(amount))
    },
    onMortgageRateBlur: rate => {
        dispatch(addMortgageRate(rate)),
    },
    onMortgageTermSelect: term => {
        dispatch(addMortgageTerm(term)),
    },
    onMortgageFrequencySelect: frequency => {
        dispatch(addMortgageFrequency(frequency)),
    },
    onMortgageAmortizationSelect: amortization => {
        dispatch(addMortgageFrequency(amortization)),
    },

  }
}
 
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
 
export default VisibleTodoList
