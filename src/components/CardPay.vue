<template>
  <div>
    <div class='back_btn'>
      <button v-on:click='onBackBtn' type='submit'>
        <img src='@/assets/logo.png' class='back_btn_img'/>
      </button>
    </div>
    <b-container>
      <b-row cols="2">
          <b-col>
            <CardDetails/>
          </b-col>
          <b-col>
            <BillingAddress/>
          </b-col>
      </b-row>
    </b-container>
    <div class='back_btn'>
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

<style scoped>
.back_btn {
  text-align: left;
}

.back_btn_img {
  width: 50px;
}
</style>
