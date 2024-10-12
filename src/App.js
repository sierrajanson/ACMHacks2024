import * as ReactDOM from 'react-dom/client'
import './App.css';
import { Component, createRef } from 'react'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import CustomWidget from './CustomWidget'

class App extends Component {
  mapDiv = createRef()
  mapView
  widgetsLoaded = false

  componentDidMount = () => {
    let map = new Map({
      basemap: 'streets-vector'
    })
    
    this.mapView = new MapView({
      map: map,
      zoom: 8,
      center: {
        latitude: 40,
        longitude: -90
      }
    })

    this.mapView.container = this.mapDiv.current

    this.mapView.when(() => {
      if (!this.widgetsLoaded) {
        let widgetNode = document.createElement('div')
        let widgetRoot = ReactDOM.createRoot(widgetNode)
        this.mapView.ui.add(widgetNode, 'top-left')
        widgetRoot.render(<CustomWidget mapView={this.mapView} />)
        this.widgetsLoaded = true
      }
    })
  }

  render = () => {
    return (
      <div
        className="App"
        ref={this.mapDiv}
        style={{
          height: '100vh',
          width: '100vw'
        }}
      >
      </div>
    )
  }
}

export default App;
