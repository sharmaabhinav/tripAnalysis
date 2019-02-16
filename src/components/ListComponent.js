import React from 'react'
import {List, Segment} from 'semantic-ui-react'

import ListItem from './ListItem'

const ListComponent = (props) => {
  const items = props.items.map((item) => <ListItem key={item.trip_id} {...item}/>)
  return (
    <Segment className='list-container'>
      <List  divided size="medium">
        {items}
      </List>
    </Segment>
  )
}

export default ListComponent
