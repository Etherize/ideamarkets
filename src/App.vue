<template>
  <div id="app">
    <Main msg="Idea Markets"/>
    <b-container fluid class="d-flex h-75 my-auto mx-auto">
      <b-row cols="2" class="mx-auto">
          <b-col class="align-self-center borderRight">
            <ChartContainer/>

          </b-col>
          <b-col class="align-self-center">
              <Account/>
              <LoginProgress/>

              <b-container class="footer">
                <h3>Non-custodial & Secure</h3>
                <p>We do not own your private keys and cannot access your funds without your permission</p>
              </b-container>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import Main from './components/Main.vue'
import Account from './components/Account.vue'
import ChartContainer from './components/ChartContainer.vue'
import LoginProgress from './components/LoginProgress.vue'


export default {
  name: 'App',
  components: {
    Main,
    Account,
    ChartContainer,
    LoginProgress
  }
}
</script>

<style>
/* Make App full screen so that way there is no white margins */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(#0044FF, #137AFF);
  height: 100vh;
  margin: 0;
}

.borderRight:after{
  position: absolute;
  content: '';
  border-right: 8px solid white;
  border-radius: 8px;
  height: 75%;
  right: 0;
  top: 10%;
}

</style>
