import { createStore } from 'redux'
import jobsApp from './reducers'

const store = createStore(jobsApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
