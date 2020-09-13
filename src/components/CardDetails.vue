<template>
  <div class='login_main_area'>
    <p>Card Details</p>
    <b-container>
        <b-row cols="1">
            <b-col>
              <input v-model='cardNumValue' class='card_input card-input-top' placeholder="4243 2342 2413 4324">
            </b-col>
        </b-row>
        <b-row cols="2">
            <b-col>
              <input v-model='cardDateValue' class='card_input' placeholder="12/2000">
            </b-col>
            <b-col>
              <input v-model='cardCvvValue' class='card_input' placeholder="CVV">
            </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>

export default {
  name: 'CardDetails',
  data() {
    return {
      cardNumValue: '',
      cardDateValue: '',
      cardCvvValue: '',
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
