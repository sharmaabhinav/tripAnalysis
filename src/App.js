import React, { Component } from 'react'
import {Segment, Input, Icon, Grid} from 'semantic-ui-react'
import './App.css'
import ListComponent from './components/ListComponent'
import { connect } from 'react-redux'
import {fetchTrips} from './actions/trip-action'

class App extends Component {

  componentDidMount () {
    const {fetchTrips} = this.props
    fetchTrips()
  }

  render() {
    const {trips} = this.props
    return (
      <Grid>
        <Grid.Row color="blue" className="page-header">
          <Grid.Column floated="right" width={4}>
              <Input
                size="large"
                icon={<Icon name='search' inverted circular/>}
                placeholder='Search Trips'
                className='header-search'
              />
          </Grid.Column>
        </Grid.Row>

         <Grid.Row className="main">
          <Grid.Column width={6} className="left-pane">
            <ListComponent items={trips}/>
          </Grid.Column>
          <Grid.Column width={10} className="right-pane">
            <Segment>right</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTrips: () => dispatch(fetchTrips())
  }
}

function mapStateToProps (state) {
  const {tripInfo: {trips}} = state
  return {
    trips
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
