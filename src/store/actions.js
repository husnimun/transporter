export const ADD_JOBS = 'ADD_JOBS'
export const SORT_JOBS = 'SORT_JOBS'
export const SET_SORT = 'SET_SORT'
export const PRICE_ASC = 'PRICE_ASC'
export const PRICE_DESC = 'PRICE_DESC'
export const DATE_ASC = 'DATE_ASC'
export const DATE_DESC = 'DATE_DESC'

export function addJobs(jobs) {
  return {
    type: ADD_JOBS,
    jobs
  };
}

export function sortJobs(type) {
  return {
    type: SORT_JOBS,
    sort: type
  }
}
