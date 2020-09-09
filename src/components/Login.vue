<template>
  <div class='login_main_area'>
    <div class='login_input_area'>
        <input v-model='emailValue' type='email' class='login_input' placeholder="email">
        <button v-on:click='onSubmitMagic' type='submit' class='login_input_submit'>
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

import Fortmatic from 'fortmatic';
import Web3 from 'web3';



export default {
  name: 'Login',
  data() {
    return {
      emailValue: '',
      hidePanel: true
    }
  },
  methods: {
    //TODO: Convert this into an async method https://medium.com/swlh/how-to-use-async-and-await-with-vue-js-apps-33132aa0838b
    //
    async onSubmitMagic() {
      console.log(this.emailValue);
      const fm = new Fortmatic('pk_test_FDABC9E0FE176C29');
      window.web3 = new Web3(fm.getProvider());
      let web3 =  window.web3;
      console.log(web3.eth.accounts);
    },

    onSubmitMW: function() {
      alert("Mobile Wallet Coming Soon");
    },

    onSubmitMT: function() {
      alert("MetaMask Login Coming Soon");
    },

    onSubmitCW: function() {
      alert("Coinbase Wallet Coming Soon");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_main_area {
  padding: 50px;
}

.login_input_area {
  text-align: left;
  padding: 10px;
  width: 330px;
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
