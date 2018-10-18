import React from 'react'

import Slider from '@material-ui/lab/Slider'

export const MyComponent = () => (
  <Slider
    min={0}
    max={100}
    value={50}
    aria-labelledby='label'
  />
)

class SliderFixed extends Slider {
  componentWillUnmount() {
    console.log('component will unmount of fixed', this.containerRef, this)
    if (this.containerRef !== undefined) {
      console.log('containerRef defined !')
    }
  }
}
  
export const MyComponentFixed = () => (
  <SliderFixed
    min={0}
    max={100}
    value={50}
    aria-labelledby='label'
  />
)

