
import {TRIPS_RECEVIED} from '../actions/trip-action'
const INITIAL_STATE = {
  trips: []
}

export default function reducer (state = INITIAL_STATE, action = {}) {
  const {type, data} = action
  switch (type) {
    case TRIPS_RECEVIED:
      console.log(state)
      return { ...state, trips: data.trips}
    default:
      return state
  }
}



