import { combineReducers } from 'redux'
import { ADD_JOBS, SORT_JOBS } from './actions'
import { sortJobs } from '../helper/helper'

function jobs(state = [], action) {
  switch(action.type) {
    case ADD_JOBS:
      return action.jobs
    case SORT_JOBS:
      return sortJobs(state, action.sort)
    default:
      return state
  }
}

const jobsApp = combineReducers({
  jobs
})

export default jobsApp