<template>
  <div id="app">
    <!-- navigation bar -->
    <navigation></navigation>

    <!-- vue pages -->
    <router-view></router-view>

    <!-- footer section -->

    <footeer></footeer>
  </div>
</template>

<script>
import navigation from './components/layouts/nav'
import footeer from './components/layouts/footer'

export default {
  name: 'app',
  components: {
    navigation,
    footeer
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
