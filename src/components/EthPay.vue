<template>
  <div class="login_main_area">
    <div  v-on:click='onBack' class='back_btn'>
        <img src='@/assets/back-arrow.png' class='back_btn_img'/>
    </div>
    <p
    class="eth-title">Send ETH to this address</p>
    <b-container>
      <b-row cols="2">
          <b-col class="eth-qr-code">
            <img class="eth-qr-img" src='@/assets/eth-address.jpg'/>
            <b-row class="eth-stats">
                <div class="eth">
                  0.024
                </div>
                <div class="type-eth">
                ETH
                </div>
            </b-row>
            <b-row class="eth-stats">
                <div class="dollars">
                $20.00
                </div>
                <div class="type-dollars">
                USD
                </div>
            </b-row>
          </b-col>
          <b-col class="loading-numbers">
            0x12321312312312fADFSDFEF12dfADF
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'EthPay',
  methods: {
    onBack: function() {
      this.$store.commit('SET_PAYMENT_TYPE', 0)
    },
     onPay: function() {
      this.$store.commit('SET_LOGIN_STEP', 2)
      }
    }
}
</script>

<style scoped>
.eth-title{
  margin-top: 2rem;
  color: white;
  text-align: left;
}

.eth-qr-code{
  width: 280px;
  height: 200px;
  padding: 1rem;
  background:white;
  border-radius: 18px;
}

.eth-qr-img{
  margin: auto;
}

.eth-stats{
  justify-content: center;
}

.eth, .dollars{
  padding: 3px;
  text-align: right;
}

.eth{
  font-weight: bold;
  font-size: 14pt;
}



.type-eth, .type-dollars{
  display: inline-block;
  margin: 4px;
  text-align: left;
}

.type-eth{
  display: inline-block;
  border-radius: 8px;
  padding: 3px;
  color: white;
  font-weight: bold;
  font-size: 10pt;
  background: rgba(0,0,0,.3);
}

.dollars{
  padding: 0;
  padding-right: 3px;
  font-size: 10pt;
  font-weight: bold;
}

.type-dollars{
  color: rgba(0,0,0,.3);
  margin: 0;
  padding: 0;
  padding-left: 5px;
  font-size: 10pt;
  font-weight: 900;
}

.loading-numbers{
  font-weight: 600;
  color: white;
  padding: 2rem;
  font-size: 14pt;
  word-wrap: break-word;
  text-align:left;
}

</style>
