<template>
    <div>
        <Status/>
        <div v-if="$store.state.loginStep === 0">
            <Login/>
        </div>
        <div v-if="$store.state.loginStep === 1">
            <Pay/>
        </div>
        <div v-if="$store.state.loginStep === 2">
            <Review/>
        </div>
  </div>
</template>

<script>
import Login from './Login.vue'
import Pay from './Pay.vue'
import Review from './Review.vue'
import Status from './Status.vue'


export default {
  name: 'LoginProgress',
  components: {
    Review,
    Login,
    Pay,
    Status
  }
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
  background-color: #0360fe;
}
</style>
