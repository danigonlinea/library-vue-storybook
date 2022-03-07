import Button from './Button.vue'
import { BUTTON_SIZES, BUTTON_VARIANTS } from './config'

export default {
  title: 'Components',
  component: Button,
  argTypes: {
    size: {
      options: BUTTON_SIZES,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: BUTTON_VARIANTS,
    },
  },
  props: [
    { name: 'label', description: 'The text inside the button.' },
    {
      name: 'variant',
      description: 'Button variant.',
      control: {
        type: 'select',
        options: BUTTON_VARIANTS,
      },
    },
    {
      name: 'size',
      description: 'Button size.',
      control: {
        type: 'select',
        options: BUTTON_SIZES,
      },
    },
  ],
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @onClick="onClick" v-bind="$props" />',
  events: [
    { name: 'onClick', description: 'Emmited when the button is clicked.' },
  ],
})

export const WatsonButton = Template.bind({})
WatsonButton.storyName = 'Button'
// Default values for render
WatsonButton.args = {
  variant: 'primary',
  size: 'medium',
}
