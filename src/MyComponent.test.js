import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  config: ({ configure }) =>
    configure(() => {
      require('./MyComponent.stories.js')
    }, module)
})
