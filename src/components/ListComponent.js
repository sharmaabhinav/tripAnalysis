import React from 'react'
import {List, Segment, Header} from 'semantic-ui-react'

import ListItem from './ListItem'

const ListComponent = (props) => {
  const {items, onTripSelection, seletedItemId} = props
  const listitems = items.map((item) => <ListItem key={item.trip_id} {...item} onClick={onTripSelection} selected={item.trip_id === seletedItemId}/>)
  const MainContent = listitems.length > 0 ? <List selection divided size="medium"> {listitems} </List> : <div className='empty-trip-state'>No Trips Found</div>

  return (
    <Segment className='list-container'>
      <Header as='h1' dividing>{props.header}</Header>
      {MainContent}
    </Segment>
  )
}

export default ListComponent
