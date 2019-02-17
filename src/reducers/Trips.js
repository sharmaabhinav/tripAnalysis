
import {TRIPS_RECEVIED, TRIP_INFO_RECEVIED, RESET_TRIP_DETAILS} from '../actions/trip-action'
const INITIAL_STATE = {
  trips: [],
  selectedTrip: {}
}

export default function reducer (state = INITIAL_STATE, action = {}) {
  const {type, data} = action
  switch (type) {
    case TRIPS_RECEVIED:
      return {...state, trips: data.trips}
    case TRIP_INFO_RECEVIED:
      return {...state, selectedTrip: data}
    case RESET_TRIP_DETAILS:
      return {...state, selectedTrip: {}}
    default:
      return state
  }
}



