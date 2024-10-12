import * as React from 'react'
import Sketch from '@arcgis/core/widgets/Sketch'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'


export default class CustomWidget extends React.Component {
  sketchTool
  state = {
    open: false,
    drawing: false
  }


  constructor (props) {
    super(props)
    
    let drawingGL = new GraphicsLayer({ id: 'sketch' })
    props.mapView.map.add(drawingGL)

    this.sketchTool = new Sketch({
      view: props.mapView,
      layer: drawingGL,
      creationMode: 'continuous',
      snappingOptions: {
        enabled: true,
        selfEnabled: true
      }
    })
    this.sketchTool.viewModel.polylineSymbol.color = 'lightgreen'
  }


  startNewSketch = () => {
    this.sketchTool.create('polyline', { mode: 'click' })
    this.setState({ drawing: true })
  }


  stopSketch = () => {
    this.sketchTool.cancel()
    this.setState({ drawing: false })
  }


  toggleOpenClose = () => {
    this.sketchTool.cancel()
    this.setState((state, _) => ({ open: !state.open }))
  }


  render() {
    return(
      <div>
        <button
          onClick={this.toggleOpenClose}
          style={{ marginRight: '100%' }}
        >
          Widget
        </button>
        {this.state.open &&
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              fontWeight: 'bold'
            }}
          >
            {this.state.drawing
              ? <button onClick={this.stopSketch}>Cancel</button>
              : <button onClick={this.startNewSketch}>Draw</button>
            }
            
          </div>
        }
      </div>
    )
  }
}
