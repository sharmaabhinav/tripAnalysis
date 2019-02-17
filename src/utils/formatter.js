import moment from 'moment'

export const humanizeTime = (seconds) => {
  let minutes = Math.floor(seconds/60)
  /* round off to nearest minute */
  if (seconds % 60 !== 0) {
    minutes += 1
  }
  return `${minutes} minutes`
}

export const getDateTime = (isoDate) => moment(isoDate).format("DD-MM-YYYY hh:mm A")

