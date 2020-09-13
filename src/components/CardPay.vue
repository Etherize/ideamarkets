<template>
  <b-container>
    <div  v-on:click='onBackBtn' class='back_btn'>
        <img src='@/assets/back-arrow.png' class='back_btn_img'/>
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
    <div class='forward_btn'>
      <button v-on:click='onContinueBtn' type='submit'>
        Continue
      </button>
    </div>
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
  }
}
</script>

<style scoped>

</style>
