<template>
  <b-container :style="{visibility: $store.state.loginStep > 0 ? 'visible' : 'hidden'}" class="account_panel">
    <b-row cols="3">
      <b-col>
        <p style="color: white"> ETH: {{eth}}</p>
      </b-col>
      <b-col>
        <p style="color: white">DAI: {{dai}}</p>
      </b-col>
      <b-col>
        <button class="connect_button" v-b-modal.modal-account-logout> {{abvAddress}}</button>
<!-- logout modal -->
        <b-modal
          id="modal-account-logout"
          ref="modal"
        >
          <b-container>
            <b-row cols="3">
              <b-col>
                <!-- Todo: set providerName to MetaMask if MetaMask is used -->
                <p>Connected with {{providerName}}</p>
              </b-col>
              <b-col>
                <button> Disconnect </button>
              </b-col>
              <b-col>
                <button> Change </button>
              </b-col>
            </b-row>
            <b-row cols="1">
              <b-col>
                <img src='@/assets/logo.png' style="width: 30px"/> {{abvAddress}}
              </b-col>
            </b-row>
            <b-row cols="2" style="text-align: center">
              <b-col>
                <img src='@/assets/logo.png' style="width: 20px"/>Copy Address
              </b-col>
              <b-col>
                <img src='@/assets/logo.png' style="width: 20px"/>View on Etherscan
              </b-col>
            </b-row>
          </b-container>
        </b-modal>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>

//TODO:  Make this component be hidden until there is login;
//TODO: Add function to Disconnect button to log out of FortMagic
//TODO: Also logout of MetaMask if applicable
//fm.user.logout();
// from https://repl.it/@fortmatic/demo-kitchen-sink#handlers.js

const promisify = (inner) =>
    new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    );


export default {
  name: 'Account',
  data: function () {
    return {
      providerName: "FortMatic",
      address: "0x",
      abvAddress: "0x",
      eth: "0.0",
      dai: "0.0"
    }
  },
  methods: {
    listenForLogin:function(){
      this.$store.commit('SET_LOGIN_CALLBACK', this.loggedIn)
    },
  async loggedIn(address, web3){
    console.log("logged in with address", address);
    this.address = address;
    var addressStart = address.substr(0, 4);
    var addressEnd = address.substr(38, 43);
    this.abvAddress = addressStart + "..." + addressEnd;
    var wei, balance
    wei = promisify(cb => web3.eth.getBalance(address, cb))
    try {
        balance = web3.fromWei(await wei, 'ether')
        console.log(balance  + "ETH");
    } catch (error) {
        console.log("balance error");
    }
  },
  mounted:function(){
    this.listenForLogin();
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- TODO: Make a mobile version of accoutn_panel that isn't fixed -->
<style scoped>

.account_panel{
  display:flex;
  padding-bottom: 1rem;
  top: 30px;
  left: 75%;
  position: fixed;
  width: 100%;
}

.connect_button {
    min-width: 102px;
    border: none;
    outline: none;
    min-height: 20px;
    border-radius: 9px;
    background-color: white;
  }
</style>
