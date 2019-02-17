import {List} from 'semantic-ui-react'
import React from 'react';
import {humanizeTime, getDateTime} from '../utils/formatter'

const ListItem = (props) => {
  const {
    trip_id: tripId,
    info: {
      distance_km: distanceKM,
      duration_seconds: duration,
      start_time: startTime,
      end_time: endTime
    },
    onClick,
    selected
  } = props

  return (
    <List.Item onClick={() => onClick(tripId)} className={selected ? 'selected-item' : ''}>
      <List.Content>
        <List.Header>Trip ID : {tripId}</List.Header>
        <List.Description>
          <div className="description-item">
            <span className='description-sub-item1'><strong>Start Time</strong>  {getDateTime(startTime)}</span>
            <span className="description-sub-item2"><strong>End Time</strong> {getDateTime(endTime)}</span>
          </div>
          <div className="description-item">
            <span className='description-sub-item1'><strong>Distance</strong> : {distanceKM} kms</span>
            <span className='description-sub-item2'><strong>Duration</strong> : {humanizeTime(duration)} </span>
          </div>
        </List.Description>
      </List.Content>
    </List.Item>
  )
}

export default ListItem