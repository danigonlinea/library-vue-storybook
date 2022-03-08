<template>
  <div>
    <label class="watson-input-label"> {{ label }}</label>
    <input
      class="watson-input"
      :type="type"
      :placeholder="placeholder"
      :class="inputClass"
      :value="localValue"
      :disabled="disabled"
      @input="
        localValue = $event.target.value
        $emit('input', newValue)
      "
    />
  </div>
</template>

<script>
import { INPUT_TYPES } from './config'

export default {
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
      default: 'Label',
    },
    name: {
      type: String,
      required: false,
    },

    value: {
      required: false,
      type: String,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: value => INPUT_TYPES.includes(value),
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      newValue: this.value,
    }
  },

  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(value) {
        this.newValue = value
      },
    },
    inputClass() {
      return {
        [`watson-input`]: true,
      }
    },
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
@import './Input.scss';
</style>
