<template>
  <label class="watson-toggle">
    <input
      type="checkbox"
      :disabled="disabled"
      :checked="value"
      @input="onInput"
    />
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onInput(evt) {
      return this.$emit('input', evt.target.checked)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Toggle.scss';
</style>
