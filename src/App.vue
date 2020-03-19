<template>
  <div id="app" class="App">
    <header class="App-header">
      <h1>Web Components Demo</h1>
      <div id="example-container">
        <DemoComponent />
      </div>
    </header>
  </div>
</template>

<script>
import DemoComponent from './components/demo-component.vue'
import './App.scss'

export default {
  name: 'App',
  components: {
    DemoComponent
  }
}
</script>
