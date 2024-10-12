import * as ReactDOM from 'react-dom/client'
import './App.css';
import { Component, createRef } from 'react'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import CustomWidget from './CustomWidget'

class Home extends Component {
  mapDiv = createRef()
  mapView
  widgetsLoaded = false

  componentDidMount = () => {
    let map = new Map({
      basemap: 'streets-vector'
    })
    
    this.mapView = new MapView({
      map: map,
      zoom: 12,
      center: {
        latitude: 36.994117,
        longitude: -122.060792
      }
    })

    this.mapView.container = this.mapDiv.current

    // this.mapView.when(() => {
    //   if (!this.widgetsLoaded) {
    //     let widgetNode = document.createElement('div')
    //     let widgetRoot = ReactDOM.createRoot(widgetNode)
    //     this.mapView.ui.add(widgetNode, 'top-left')
    //     widgetRoot.render(<CustomWidget mapView={this.mapView} />)
    //     this.widgetsLoaded = true
    //   }
    // })
  }

  render = () => {
    return (
      <div className="App">
        <div>
          testing
        </div>
        <div
            ref={this.mapDiv}
            style={{
              height: '50vh',
              width: '50vw'}}
            >
        </div>
      </div>
    )
  }
}

export default Home;
