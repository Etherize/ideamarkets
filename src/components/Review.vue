<template>
  <b-container style="margin-top: 50px;">
    <b-row>
      <button class="price_button">23.45 USD</button>
    </b-row>
    <div class="custom">
    <b-row cols="2" style="margin-top: 20px;">
      <b-col style="color:white;"> <h6 class="font-weight-bold"> = $23.45</h6> </b-col>
    </b-row>
        <b-row cols="2">
      <b-col style="color:white; margin-left: 16px;"> <h6 class="font-weight-bold">$COINDESK.COM</h6> </b-col>
    </b-row>
      <b-row style="margin-top: 10px;" cols="4" class="row-text">
        <b-col> Minimum Sold</b-col>
        <b-col class="text-left"> 23.1</b-col>
      </b-row>
      <b-row cols="4" class="row-text">
        <b-col>Price Impact</b-col>
        <b-col style="color: #F08080" class="text-left">3.2%</b-col>
      </b-row>
      <b-row cols="4" class="row-text">
        <b-col>Provider Fee</b-col>
        <b-col class="text-left">1%</b-col>
      </b-row>
      <b-row cols="4" class="row-text">
        <b-col>Gas Fee</b-col>
        <b-col class="text-left">Free</b-col>
      </b-row>
      </div>
      <b-row>
        <button class="confirm_button">Continue</button>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Review',
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
.custom {
  text-align: left;
  margin-left: 40px;
}
.confirm_button {
    margin-top: 20px;
    color: #2c5ade;
    font-weight: bold;
    min-width: 250px;
    min-height: 45px;
    margin-left: 47px;
    border: none;
    outline: none;
    border-radius: 12px;
    background-color: #f2f2f2;
}
.row-text {
  color: white;
  text-align: align-left;
}
</style>
