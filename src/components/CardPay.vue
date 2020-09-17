<template>
  <div>
    <div  v-on:click='onBack' class='back_btn'>
        <img src='@/assets/back-arrow.png' class='back_btn_img'/>
    </div>
    <b-container>
        <b-row class="card-input">
            <CardDetails/>
          </b-row>
          <b-row class="card-input">
            <BillingAddress/>
          </b-row>
    </b-container>
    <div class='forward_btn'>
      <button v-on:click='onPay' type='submit'>
        Continue
      </button>
    </div>
  </div>
</template>

<script>
import CardDetails from './CardDetails.vue'
import BillingAddress from './BillingAddress.vue'

export default {
  name: 'CardPay',
  components: {
    CardDetails,
    BillingAddress,
  },
methods: {
  onBack: function() {
    this.$store.commit('SET_PAYMENT_TYPE', 0)
  },
   onPay: function() {
     console.log("Payment initiated");
     this.$store.state.paymentCallbacks.forEach(callback=>callback('faketransaction', 'fakeamount '));
     this.$store.commit('SET_LOGIN_STEP', 2)
    }
  }
}
</script>

<style>

.card-input-top {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.card-input {
  max-width: 300px;
}

</style>
