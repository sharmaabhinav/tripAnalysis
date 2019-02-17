import React from 'react'
import {Input, Icon} from 'semantic-ui-react'
const Search = (props) => {
  return (
    <Input
      size="large"
      icon={<Icon name='search' inverted circular/>}
      placeholder='Search Trips by ID'
      className='header-search'
      onChange={props.onSearch}
    />
  )
}

export default Search