<template>
  <b-container>
        <div v-if="$store.state.paymentType === 0">
   <b-row>
    <button v-on:click='payCard' class='pay_option_btn'>
      <img src='@/assets/logo.png' class='pay_option_btn_img'/>
      <div class='pay_option_btn_txt'>Credit / Debit Card</div>
    </button>
  </b-row>
  <b-row>
    <button v-on:click='payApple' class='pay_option_btn'>
      <img src='@/assets/logo.png' class='pay_option_btn_img'/>
      <div class='pay_option_btn_txt'>Apple Pay</div>
    </button>
    </b-row>
    <b-row>
    <button :class="{focus_button: this.$store.state.paymentType == 1}" v-on:click='payEth' class='pay_option_btn'>
      <img src='@/assets/logo.png' class='pay_option_btn_img'/>
      <div class='pay_option_btn_txt'>Ethereum</div>
    </button>
    </b-row>

  </div>

    <div v-if="$store.state.paymentType === 1">
       <CardPay/>
    </div>
    <div v-if="$store.state.paymentType === 2">
       <EthPay/>
    </div>


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
.pay_option_btn {
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

.pay_option_btn_img {
  width: 30px;
  height: 30px;
  margin: 5px;
}
</style>
