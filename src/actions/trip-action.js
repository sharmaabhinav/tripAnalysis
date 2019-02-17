import {get} from '../api'
export const TRIPS_RECEVIED = 'TRIPS_RECEVIED'
export const TRIP_INFO_RECEVIED = 'TRIP_INFO_RECEVIED'
export const RESET_TRIP_DETAILS = 'RESET_TRIP_DETAILS'


export function fetchTrips () {
  return function (dispatch, getState) {
    get('/data/trips.json').then((response) => {
      let {data: {trips}} = response
      const {filterInfo: {search}} = getState()
      if (search) {
        trips = trips.filter((trip) => trip.trip_id.match(search) != null)
      }
      dispatch({
        type: TRIPS_RECEVIED,
        data: {trips}
      })
    })
  }
}

export function resetTripDetails () {
  return {
    type: RESET_TRIP_DETAILS
  }
}

export function fetchTripDetails (params) {
  return function (dispatch, getState) {
    get(`/data/tripInfo_${params}.json`).then((response) => {
      const {data: {events, simple_path: path}} = response
      dispatch({
        type: TRIP_INFO_RECEVIED,
        data: {events, path, id: params}
      })
    })
  }
}