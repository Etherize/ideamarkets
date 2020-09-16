<template>
  <b-container v-if="this.address" style="display:flex; margin-left: 80px;">
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
  loggedIn(address, fm){
    console.log("logged in with address", address);
    this.address = address;
    var addressStart = address.substr(0, 4);
    var addressEnd = address.substr(38, 43);
    this.abvAddress= addressStart + "..." + addressEnd;
    // Get user balance (includes ERC20 tokens as well)
        fm.eth.getCoinbase((error, coinbase) => {
        if (error) throw error;
        console.log("ETH Coinbase:" + coinbase);
      });
  //   let balances = fm.user.getBalances();
  //   console.log(balances);
  //    let ethBalance =  fm.balances.ethBalance;
    // console.log("Eth Balance:" + ethBalance)
  //   this.eth = ethBalance;
    }
  },
  mounted:function(){
    this.listenForLogin();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.connect_button {
    min-width: 102px;
    border: none;
    outline: none;
    min-height: 20px;
    border-radius: 9px;
    background-color: white;
  }
</style>
