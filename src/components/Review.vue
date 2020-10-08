<template>

  <b-container class="mainContainer">

    <div class="confirm_panel">

      <div  v-on:click='onBack' class='back_btn'>
        <img src='@/assets/back-arrow.png' class='back_btn_img'/>
      </div>

      <b-row class="mt-4"  style="color:white;">
        <b-col> Amount To Spend</b-col>
        <input type="number" style="border-radius: 6px;" id="amountUSD" v-model="amountUSD"
               placeholder="$0" class="card_input ml-5">
      </b-row>
      <b-row style="margin-top: 10px;" class="row-text">
        <b-col> Minimum Sold</b-col>
        <b-col class="text-left"> 23.1</b-col>
      </b-row>
      <b-row  class="row-text">
        <b-col>Price Impact</b-col>
        <b-col style="color: #F08080" class="text-left">3.2%</b-col>
      </b-row>
      <b-row class="row-text">
        <b-col>Provider Fee</b-col>
        <b-col class="text-left">1%</b-col>
      </b-row>
      <b-row  class="row-text">
        <b-col>Gas Fee</b-col>
        <b-col class="text-left">Free</b-col>
      </b-row>
      </div>
      <b-row>
        <button v-on:click='buyToken' class="continue_button">Place Order</button>
      </b-row>
    <div>
      <b-modal id="modal-1" title="Order Status">
        <div v-if="this.$store.state.loading">
          <div class="text-center">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
        </div>
        <div v-else>
          <p class="my-4">{{this.$store.state.serverResponse}}</p>
          <p class="my-4">{{this.$store.state.error}}</p>
        </div>
      </b-modal>
    </div>
  </b-container>


</template>

<script>


export default {
  name: 'Review',
  data:function(){return {
    amountUSD: '$0',
  }
  },
  methods: {
    onBack: function() {
      this.$store.commit('SET_LOGIN_STEP', 1)
    },
  buyToken:function(){
    this.$bvModal.show("modal-1");
    this.$store.commit('SET_WAITING_FOR_BACKEND', true);

    // TODO: use this cc info in the following api call: https://docs.sendwyre.com/docs/white-label-card-processing-api
    let postData = this.$store.state.paymentInfo;

    // TODO: ADD any extra data here you want to include from user
    postData["amountUSD"] = this.amountUSD;
    postData = JSON.stringify(postData);

    console.log("cc data posting to backend:",postData);
    const BACKEND_URL="https://example.com";

    fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: postData,
     })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.$store.commit('SET_WAITING_FOR_BACKEND', false);
        // TODO: parse your server response to make it friendly
        this.$store.commit('SET_RESPONSE_FROM_BACKEND', data);

      })
      .catch((error) => {
        this.$store.commit('SET_WAITING_FOR_BACKEND', false);
        // TODO: parse your server error to make it friendly
        this.$store.commit('SET_ERROR_FROM_BACKEND', error);
      });

  },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.price_button {
    min-width: 200px;
    min-height: 45px;
    margin-left: 47px;
    border: none;
    outline: none;
    border-radius: 12px;
    background-color: #f2f2f2;
}
.confirm_panel {
  text-align: left;
  margin-left: 40px;
}

.row-text {
  color: white;
  text-align: left;
}
</style>
