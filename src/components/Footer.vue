<template>
  <b-container class="footer">
              <b-row cols="3">
                <b-col cols="8" md="6">
                </b-col>
                <b-col cols="3" md="2" class="lock">
                  <img width="75px" height="75px" src='@/assets/lock.png'>
                </b-col>
                <b-col cols="4" md="4" class="footer_text">
                  <h3>Non-Custodial & Secure</h3>
                  <p>We cannot access your private keys nor funds without your permission.</p>
                </b-col>
              </b-row>
  </b-container>
</template>

<script>


export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer{
  padding-bottom: 1rem;
  bottom: 30px;
  right: 5%;
  position: fixed;
  width: 100%;
}

.footer_text{
  text-align: left;
  color: white;
}

</style>
