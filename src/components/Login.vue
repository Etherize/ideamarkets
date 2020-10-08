<template>
  <b-container  class="mainContainer">
    <b-container>
    <b-row>
     <button v-on:click='onMagic("email")' class='option_btn'>
       <img src='@/assets/email.png' class='option_btn_img'/>
       <div class='option_btn_txt'>Email Address</div>
     </button>
   </b-row>
   <b-row>
     <button v-on:click='onMagic("phone")' class='option_btn'>
       <img src='@/assets/phone.png' class='option_btn_img'/>
       <div class='option_btn_txt'>Phone Number</div>
     </button>
     </b-row>
     <b-row>
     <button v-on:click='onMetaMask' class='option_btn'>
       <img src='@/assets/metamask.png' class='option_btn_img'/>
       <div class='option_btn_txt'>MetaMask</div>
     </button>
     </b-row>
   </b-container>
 </b-container>
</template>

<script>

import Fortmatic from 'fortmatic';
import Web3 from 'web3';

export default {
  name: 'Login',
  data() {
    return {
      emailValue: '',
      hidePanel: true,
    }
  },
  methods: {
    async onMagic(loginMethod) {
      const fm = new Fortmatic('pk_test_FDABC9E0FE176C29');
      fm.configure({ primaryLoginOption: loginMethod });
      const web3 = new Web3(fm.getProvider());
      web3.eth.getAccounts((err, accounts) => {
      if (err) throw err;
          let address = accounts[0];
            console.log("Magic address:" + address);
            this.$store.state.loginCallbacks.forEach(callback=>callback(address, web3));
            this.$store.commit('SET_WEB_3_ADDRESS', address);
            this.$store.commit('SET_LOGIN_STEP', 1)
        });
    },
    onMetaMask: function() {
      alert("MetaMask Coming Soon");
    },
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



.hideme {
  display: none;
}
</style>
