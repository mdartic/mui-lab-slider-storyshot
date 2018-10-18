import React from 'react'
import { storiesOf } from '@storybook/react'

import { MyComponent, MyComponentFixed } from './MyComponent'

const stories = storiesOf('MyComponent', module)

stories
.add('default', () => (
  <MyComponent />
))

.add('fixed', () => (
  <MyComponentFixed />
))
