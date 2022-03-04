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
@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';

.watson-btn {
  border: 1px solid $color-example;
  border-radius: 3px;
  background-color: var(--color-primary);
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
  border: 4px solid var(--color-primary);
  padding: var(--spacing-small) var(--spacing-medium);
  transition: 0.25s ease-in-out all;
}
</style>
