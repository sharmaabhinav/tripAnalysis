import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import './App.css'
import ListComponent from './components/ListComponent'
import Map from './components/Map'
import Search from './components/Search'
import { connect } from 'react-redux'
import {fetchTrips, fetchTripDetails, resetTripDetails} from './actions/trip-action'
import {search} from './actions/filter-action'

class App extends Component {

  componentDidMount () {
    const {fetchTrips} = this.props
    fetchTrips()
  }

  render() {
    const {trips, fetchTripDetails, selectedTrip, searchTrips} = this.props
    const MapItem = Object.keys(selectedTrip).length > 0 ? <Map info={selectedTrip} /> : <div className='empty-map-state'>Click on any trip to view the details on map</div>
    return (
      <Grid>
        <Grid.Row color="blue" className="page-header">
          <Grid.Column floated="right" width={4}>
            <Search onSearch= { (event, data) => searchTrips(data.value)}/>
          </Grid.Column>
        </Grid.Row>

         <Grid.Row className="main">
          <Grid.Column width={6} className="left-pane">
            <ListComponent items={trips} onTripSelection={fetchTripDetails} header={'Trips'} seletedItemId={selectedTrip.id}/>
          </Grid.Column>
          <Grid.Column width={10} className="right-pane">
            {MapItem}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
    fetchTripDetails: (tripId) => dispatch(fetchTripDetails(tripId)),
    searchTrips: (value) => {
      dispatch(search(value))
      dispatch(fetchTrips())
      dispatch(resetTripDetails())
    }
  }
}

function mapStateToProps (state) {
  const {tripInfo: {trips, selectedTrip}} = state
  return {
    trips,
    selectedTrip
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
