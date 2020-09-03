<template>
  <div class='login_main_area'>
    <div class='login_input_area'>
        <input v-model='emailValue' type='email' class='login_input' placeholder="email">
        <button v-on:click='onSubmit' type='submit' class='login_input_submit'>
          <img src='@/assets/logo.png' class='login_input_btn_img'/>
        </button>
    </div>
    <div class='login_options_area'>
        <button v-on:click='hidePanel = !hidePanel' class='login_option_toggle'>
          See more web3 login options
        </button>
        <div class='login_options_btn_area' :class="{hideme: hidePanel}">
          <button v-on:click='onSubmitMW' class='login_option_btn'>
            <img src='@/assets/logo.png' class='login_option_btn_img'/>
            <div class='login_option_btn_txt'>Mobile Wallet</div>
          </button>
          <button v-on:click='onSubmitMT' class='login_option_btn'>
            <img src='@/assets/logo.png' class='login_option_btn_img'/>
            <div class='login_option_btn_txt'>Metamask</div>
          </button>
          <button v-on:click='onSubmitCW' class='login_option_btn'>
            <img src='@/assets/logo.png' class='login_option_btn_img'/>
            <div class='login_option_btn_txt'>Coinbase Wallet</div>
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      emailValue: '',
      hidePanel: true
    }
  },
  methods: {
    onSubmit: function() {
      alert(this.emailValue);
    },

    onSubmitMW: function() {
      alert("This is Mobile Wallet Login");
    },

    onSubmitMT: function() {
      alert("This is Metamask Login");
    },

    onSubmitCW: function() {
      alert("This is Coinbase Wallet Login");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_main_area {
  height: 100vh;
  background-color: #0360fe;
  padding: 50px;
}

.login_input_area {
  text-align: left;
  padding: 10px;
  width: 377px;
  border-bottom: 8px solid white;
}

.login_input {
  width: 80%;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: white;
}

.login_input:focus {
  background-color: transparent;
  border: none;
  outline: none;
}

.login_input::placeholder {
  color: white;
}

.login_input_submit {
  border: 0;
  width: 10%;
  background: transparent;
  float: right;
}

.login_input_btn_img {
  width: 100%;
}

.login_options_area {
  text-align: left;
  margin-top: 50px;
}

.login_option_toggle {
  color: white;
  font-size: 24px;
  border: 0;
  border-bottom: 1px solid white;
  background: transparent;
  margin-bottom: 20px;
}

.login_option_toggle:focus {
  outline: none;
}

.login_option_btn {
  width: 126px;
  height: 54px;
  border-radius: 15px;
  background-color: white;
  border: 0;
  margin: 10px;

  display: flex;
  align-items: center;
  float: left;
}

.login_option_btn:focus {
  outline: 0;
}

.login_option_btn_img {
  width: 30px;
  height: 30px;
  margin: 5px;
}

.login_option_btn_txt {
  float: right;
  text-align: left;
}

.hideme {
  display: none;
}
</style>
