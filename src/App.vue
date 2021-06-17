<template>
  <div id="app">
    <!-- spinner -->
    <div class="spinner">
      <fingerprint-spinner
        :animation-duration="1500"
        :size="64"
        color="#009dea"
      />
    </div>
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
import  { FingerprintSpinner }  from 'epic-spinners'
export default {
  name: 'app',
  components: {
    navigation,
    footeer,
    FingerprintSpinner,
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  overflow: hidden;
}
.spinner {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
