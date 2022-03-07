<template>
  <div>
    <label> This is the button from Watson </label>
    <button class="watson-btn" type="button" @click="onClick">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
      default: 'Button Label',
    },
    size: {
      type: String,
    },
  },

  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor,
      }
    },
  },

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */

      console.log('This is a click!')
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss">
@import './Button';
</style>
