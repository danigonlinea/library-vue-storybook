<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Button label="Click me" value="click me"> Click me </Button>
  </div>
</template>

<script>
import { Button } from './components'

export default {
  name: 'App',
  components: {
    Button,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
