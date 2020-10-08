<template>
  <b-container class="login_main_area">
    <div  v-on:click='onBack' class='back_btn'>
        <img src='@/assets/back-arrow.png' class='back_btn_img'/>
    </div>
    <b-container>
        <b-row class="card-input">
            <div>
                <p class="card_subtitle">Debit Card</p>
                <b-container>
                    <b-row cols="1">
                        <input v-model='cardNumValue' class='card_input card_input_top' placeholder="4243 2342 2413 4324">
                    </b-row>
                    <b-row cols="2">
                        <input v-model='cardDateValue' style='  border-right: 2px solid #085bff;' class='card_input card_input_bottom_left card_input_date' placeholder="12/2000">
                        <input v-model='cardCvvValue' class='card_input card_input_bottom_right' placeholder="CVV">
                    </b-row>
                </b-container>
            </div>
      </b-row>
          <b-row class="card-input">
              <div class='billing_address'>
                  <p class="card_subtitle">Billing Address</p>
                  <b-container>
                      <b-row cols="1">
                          <input v-model='billingAdr' class='card_input card_input_top' placeholder="Address">
                      </b-row>
                      <b-row cols="3">
                          <input v-model='billingAdrCity' class='card_input card_input_bottom_left' placeholder="City">
                          <input v-model='billingAdrState' class='card_input card_input_bottom_center' placeholder="State">
                          <input v-model='billingAdrPostal' class='card_input card_input_bottom_right' placeholder="Postal">
                      </b-row>
                  </b-container>
              </div>
          </b-row>
    </b-container>
      <b-row>
        <button v-on:click='sendBackendPaymentInfoAndWaitForConfirmation' class="continue_button">Continue</button>
      </b-row>
  </b-container>
</template>


<script>

export default {
  name: 'CardPay',
    data: function(){
      return{
          cardNumValue: '',
          cardDateValue: '',
          cardCvvValue: '',
          billingAdr: '',
          billingAdrCity: '',
          billingAdrState: '',
          billingAdrPostal: '',
      }
    },
  components: {
  },
methods: {
  onBack: function() {
    this.$store.commit('SET_PAYMENT_TYPE', 0)
  },
   sendBackendPaymentInfoAndWaitForConfirmation: function() {
        console.log("Payment saved");

       const postData = { cardNumValue: this.cardNumValue,
           cardDateValue: this.cardDateValue,
           cardCvvValue: this.cardCvvValue,
           billingAdr: this.billingAdr,
           billingAdrCity: this.billingAdrCity,
           billingAdrState: this.billingAdrState,
           billingAdrPostal: this.billingAdrPostal
       };
       this.$store.commit('SET_PAYMENT_INFO', postData);
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
  border-bottom-left-radius: 10px;
}

.card_input_bottom_right {
  width: 100%;
  border-bottom-right-radius: 10px;
}


</style>
