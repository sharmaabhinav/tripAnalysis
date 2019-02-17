import React, {Component} from 'react';
import L from 'leaflet'

const tileLayerUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5lbnRoZ3VydSIsImEiOiJjanJ3a2wzaTAwZHQ5M3lvOGpiYWl1YWFmIn0.xbBjnc5UstpeOpBSolbbQQ'

class Map extends Component {

  constructor (props) {
    super(props)
    this.map = null
    this.path = null
  }

  intializeMap () {
    this.map = L.map('map')
    L.tileLayer(tileLayerUrl, {
      id: 'mapbox.streets'
    }).addTo(this.map)
  }

  drawPath (path) {
    this.path && this.map.removeLayer(this.path)
    var latlngs = path.map((point) => [point.latitude, point.longitude])
    this.path = L.polyline(latlngs, {color: 'black'}).addTo(this.map)
    this.map.fitBounds(this.path.getBounds());
  }

  componentDidMount () {
    const {info: {path}} = this.props
    this.intializeMap()
    this.drawPath(path)
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    const {info: {path}} = nextProps
    this.drawPath(path)
  }

  render () {
    return <div id='map'></div>
  }
}

export default Map