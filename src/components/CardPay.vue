<template>
  <div>
    <div  v-on:click='onBackBtn' class='back_btn'>
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
      <button v-on:click='onContinueBtn' type='submit'>
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
  }
}
</script>

<style>

.card-input-top {
  border-top-right-radius: 5;
  border-top-left-radius: 5;
}

.card-input {
  max-width: 300px;
}

</style>
