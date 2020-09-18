<template>
  <div class="login_main_area">
    <div  v-on:click='onBack' class='back_btn'>
        <img src='@/assets/back-arrow.png' class='back_btn_img'/>
    </div>
    <p>Send ETH to this address</p>
    <b-container>
      <b-row cols="2">
          <b-col>
            <img src='@/assets/eth-address.jpg'/>
          </b-col>
          <b-col>
            0x12321312312312f
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'EthPay',
  methods: {
    onBack: function() {
      this.$store.commit('SET_PAYMENT_TYPE', 0)
    },
     onPay: function() {
      this.$store.state.paymentCallbacks.forEach(callback=>callback('faketransaction', 'fakeamount '));
      this.$store.commit('SET_LOGIN_STEP', 2)
      }
    }
}
</script>

<style scoped>

</style>
