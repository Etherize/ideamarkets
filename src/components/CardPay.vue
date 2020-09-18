<template>
  <b-container class="login_main_area">
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
      <b-row>
        <button v-on:click='buyToken' class="continue_button">Continue</button>
      </b-row>
  </b-container>
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

.back_btn:hover{
 opacity: .8;
}

.card_subtitle {
  color: white;
}


.card_input_top {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 2px;
}

.card-input {
  padding-left: 10px;
  max-width: 300px;
}

.card_input_bottom_left {
  width: 145%;
  border-right: 2px solid #085bff;
  border-bottom-left-radius: 10px;
}

.card_input_bottom_right {
  width: 100%;
  border-bottom-right-radius: 10px;
}


</style>
