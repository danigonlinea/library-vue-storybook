import { action } from '@storybook/addon-actions'
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

export const WithText = () => ({
  components: { Button },
  template: '<Button @click="action">Hello Button</Button>',
  methods: { action: action('clicked') },
})

export const WithSomeEmoji = () => ({
  components: { Button },
  template: '<Button>😀 😎 👍 💯</Button>',
})

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
