import trips from './Trips'
import filters from './Filters'
import { combineReducers } from 'redux'

export default combineReducers({
  tripInfo: trips,
  filterInfo: filters
})