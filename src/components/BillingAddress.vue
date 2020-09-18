<template>
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
</template>

<script>

export default {
  name: 'BillingAddress',
  data() {
    return {
      billingAdr: '',
      billingAdrCity: '',
      billingAdrState: '',
      billingAdrPostal: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.billing_address{
    margin-top: 20px;
}

.card_input_bottom_center{
  border-left: 2px solid #085bff;
  border-right: 2px solid #085bff; 
}

</style>
