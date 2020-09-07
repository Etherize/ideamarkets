<template>
  <div class='login_main_area'>
    <p>Billing Address</p>
    <b-container>
        <b-row cols="1">
            <b-col>
              <input v-model='billingAdr' class='card_input' placeholder="Address">
            </b-col>
        </b-row>
        <b-row cols="3">
            <b-col>
              <input v-model='billingAdrCity' class='card_input' placeholder="City">
            </b-col>
            <b-col>
              <input v-model='billingAdrState' class='card_input' placeholder="State">
            </b-col>
            <b-col>
              <input v-model='billingAdrPostal' class='card_input' placeholder="Postal">
            </b-col>
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
.card_input {
    width: 100%;
}
</style>
