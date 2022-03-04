import Button from './Button.vue'

export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}

export const WithLabelText = () => ({
  components: { Button },
  template: '<Button label="This is custom Label" />',
})

export const WithSomeEmoji = () => ({
  components: { Button },
  template: '<Button  label="😀 😎 👍 💯" />',
})
