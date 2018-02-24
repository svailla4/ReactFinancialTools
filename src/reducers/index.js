// Combining reducers in case that I add more containers

import { combineReducers } from 'redux'
import mortgage from './mortgage'
 
const financialToolApp = combineReducers({
  mortgage
})
 
export default financialToolApp;
