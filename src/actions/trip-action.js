import {get} from '../api'
export const TRIPS_RECEVIED = 'TRIPS_RECEVIED'


export function fetchTrips () {
  return function (dispatch, getState) {
    get('/data/trips.json').then((response) => {
      const {data: {trips}} = response
      dispatch({
        type: TRIPS_RECEVIED,
        data: {trips}
      })
    })
  }
}