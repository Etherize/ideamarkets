<template>
  <div id="app">
    <b-container fluid class="d-flex h-75 my-auto mx-auto">
      <b-row class="mx-auto">
          <b-col class="align-self-center borderRight">
            <ChartContainer/>
          </b-col>
          <b-col style="padding-top: 100px;" class="align-self-center">
              <Account/>
              <LoginProgress/>
              <Footer/>
          </b-col>
      </b-row>
    </b-container>

  </div>
</template>


<script>
import Account from './components/Account.vue'
import ChartContainer from './components/ChartContainer.vue'
import LoginProgress from './components/LoginProgress.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Account,
    ChartContainer,
    LoginProgress,
    Footer
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

.lock{
  text-align: right;
}

.footer{
  padding-bottom: 1rem;
  bottom: 0;
  position: relative;
  top: -20px;
  left: -45px;
}

.footer_text{
  text-align: left;
  color: white;
}

.input_btn_img {
  width: 100%;
}

.options_area {
  text-align: left;
  margin-top: 50px;
}

.option_toggle {
  color: white;
  font-size: 24px;
  border: 0;
  border-bottom: 1px solid white;
  background: transparent;
  margin-bottom: 20px;
}

.option_toggle:focus {
  outline: none;
}

.option_btn:focus {
  outline: 0;
}

.option_btn_img {
  width: 30px;
  height: 30px;
  margin: 5px;
}


.option_btn {
  width: 350px;
  height: 54px;
  border-radius: 15px;
  background-color: white;
  border: 0;
  margin: 10px;
  display: flex;
  align-items: center;
  float: left;
}

.option_btn_txt {
  float: right;
  text-align: left;
}

.back_btn {
  text-align: left;
}

.back_btn_img {
  width: 50px;
}

</style>
