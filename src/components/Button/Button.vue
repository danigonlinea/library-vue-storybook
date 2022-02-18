<template>
  <div>
    <label> This is the button from Watson </label>
    <button type="button" @click="onClick">
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

<style lang="css">
:root {
  --primary-color: #41b883;
  --on-primary-color: white;

  --small-spacing: 12px;
  --normal-spacing: calc(var(--small-spacing) * 2);
}

button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: var(--primary-color);
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
  border: 4px solid var(--primary-color);
  padding: var(--small-spacing) var(--normal-spacing);
  transition: 0.25s ease-in-out all;
}
</style>
