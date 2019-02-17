
import {SEARCH} from '../actions/filter-action'
const INITIAL_STATE = {
  search: ''
}

export default function reducer (state = INITIAL_STATE, action = {}) {
  const {type, data} = action
  switch (type) {
    case SEARCH:
      return {...state, search: data.search}
    default:
      return state
  }
}