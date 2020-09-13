<template>
  <b-container>
    <b-container>
        <div v-if="$store.state.paymentType === 0">
           <b-row>
            <button v-on:click='payCard' class='option_btn'>
              <img src='@/assets/credit.png' class='option_btn_img'/>
              <div class='option_btn_txt'>Credit / Debit Card</div>
            </button>
          </b-row>
          <b-row>
          <button :class="{focus_button: this.$store.state.paymentType == 1}" v-on:click='payEth' class='option_btn'>
            <img src='@/assets/ethereum.png' class='option_btn_img'/>
            <div class='option_btn_txt'>Ethereum</div>
          </button>
          </b-row>
          <b-row>
            <button v-on:click='payApple' class='option_btn'>
              <img src='@/assets/apple.png' class='option_btn_img'/>
              <div class='option_btn_txt'>Apple Pay</div>
            </button>
          </b-row>
  </div>

    <b-container v-if="$store.state.paymentType === 1">
       <CardPay/>
    </b-container>
    <b-container v-if="$store.state.paymentType === 2">
       <EthPay/>
    </b-container>

    </b-container>
  </b-container>
</template>

<script>

import CardPay from './CardPay.vue'
import EthPay from './EthPay.vue'

export default {
  name: 'Pay',
    components: {
      EthPay,
      CardPay
    },
  methods: {
    payCard: function() {
      this.$store.commit('SET_PAYMENT_TYPE', 1);
    },
    payApple: function() {
      this.$store.commit('SET_PAYMENT_TYPE', 0);
      alert("Apple Pay Coming Soon");
    },
    payEth: function() {
      this.$store.commit('SET_PAYMENT_TYPE', 2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
