<template>
  <div>
    <div class='back_btn'>
      <button v-on:click='onBackBtn' type='submit'>
        <img src='@/assets/logo.png' class='back_btn_img'/>
      </button>
    </div>
    <p>Send ETH to this address</p>
    <b-container>
      <b-row cols="2">
          <b-col>
            <img src='@/assets/logo.png'/>
          </b-col>
          <b-col>
            0x12321312312312f
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'EthPay'
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
