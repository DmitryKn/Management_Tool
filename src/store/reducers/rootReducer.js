import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,      //everything stores in auth
  project: projectReducer //everything stores in project
})

export default rootReducer;