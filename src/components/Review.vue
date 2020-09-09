<template>
  <b-container>
    <b-row>
      <div class="confirm_total"><button>$23.45 USD</button></div>
    </b-row>
    <b-row>
      <b-col> <h1> = </h1> </b-col>
      <b-col> $24 </b-col>
      <b-row> $COINDESK </b-row>
    </b-row>
      <b-row cols="2">
        <b-col>Minimum Sold</b-col>
        <b-col>23.1</b-col>
      </b-row>
      <b-row cols="2">
        <b-col>Price Impact</b-col>
        <b-col>3.2%</b-col>
      </b-row>
      <b-row cols="2">
        <b-col>Provider Fee</b-col>
        <b-col>1%</b-col>
      </b-row>
      <b-row cols="2">
        <b-col>Gas Fee</b-col>
        <b-col>Free</b-col>
      </b-row>
      <b-row>
        <button class="confirm_button">Purchase</button>
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

</style>
