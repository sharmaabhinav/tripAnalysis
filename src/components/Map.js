import React, {Component} from 'react';
import L from 'leaflet'
import {Label} from 'semantic-ui-react'

const tileLayerUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5lbnRoZ3VydSIsImEiOiJjanJ3a2wzaTAwZHQ5M3lvOGpiYWl1YWFmIn0.xbBjnc5UstpeOpBSolbbQQ'

class Map extends Component {

  constructor (props) {
    super(props)
    this.map = null
    this.path = null
    this.eventPaths = []
  }

  intializeMap () {
    this.map = L.map('map')
    L.tileLayer(tileLayerUrl, {
      id: 'mapbox.streets'
    }).addTo(this.map)
  }

  cleanMap () {
    this.path && this.map.removeLayer(this.path)
    this.eventPaths.map((eventPath) => this.map.removeLayer(eventPath))
  }

  drawPath (path, events) {
    this.cleanMap()

    const pathLatlngs = path.map((point) => [point.latitude, point.longitude])
    this.path = L.polyline(pathLatlngs, {color: 'blue'}).addTo(this.map)

    events.forEach((event) =>  {
      const line = L.polyline([[event.latitude_start, event.longitude_start], [event.latitude_end, event.longitude_end]], {color: 'red'})
                    .addTo(this.map)
      this.eventPaths.push(line)
    })
    this.map.fitBounds(this.path.getBounds());
  }

  componentDidMount () {
    const {info: {path, events}} = this.props
    this.intializeMap()
    this.drawPath(path, events)
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    const {info: {path, events}} = nextProps
    this.drawPath(path, events)
  }

  render () {
    return (
      <React.Fragment>
        <div id='mapLegends'>
          <strong>Legends: </strong>
          <Label color='red' circular>Event Path</Label>
          <Label circular color='blue'>Normal Path</Label>
        </div>
        <div id='map'></div>
      </React.Fragment>
    )
  }
}

export default Map