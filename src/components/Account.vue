<template>
  <b-container style="display:flex; justify-content: space-evenly; margin-left: 20px;">
    <b-row cols="4">
      <b-col>
        <p style="color: white">Eth: 1.1</p>
      </b-col>
      <b-col>
        <p style="color: white">DAI: 25</p>
      </b-col>
      <b-col>
        <button class="connect_button" v-b-modal.modal-account-logout> 0x38e...A83C</button>
<!-- logout modal -->
        <b-modal
          id="modal-account-logout"
          ref="modal"
        >
          <b-container>
            <b-row cols="3">
              <b-col>
                <p>Connected with WalletConnect</p>
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
                <img src='@/assets/logo.png' style="width: 30px"/>0x6cEF...67E1
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
  name: 'Account'
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
