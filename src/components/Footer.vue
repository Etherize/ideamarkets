<template>
    <b-container style="margin: 50px 40px;" class="footer">
                <b-row cols="3">


                  <b-col cols="2" md="2" class="lock">
                    <img width="75px" height="75px" src='@/assets/lock.png'>
                  </b-col>
                  <b-col cols="1" sm="6" class="footer_text">
                    <h3>Non-custodial & Secure</h3>
                    <p>We do not own your private keys and cannot access your funds without your permission</p>
                  </b-col>
                </b-row>
    </b-container>
</template>

<script>

export default {
  name: 'Footer',

}
</script>

<style scoped>


.footer{
  padding-bottom: 1rem;
  bottom: 0;
  position: relative;
  top: -20px;
  left: -45px;
}

.footer_text{
  text-align: left;
  color: white;
}

.input_btn_img {
  width: 100%;
}

.options_area {
  text-align: left;
  margin-top: 50px;
}

.option_toggle {
  color: white;
  font-size: 24px;
  border: 0;
  border-bottom: 1px solid white;
  background: transparent;
  margin-bottom: 20px;
}

.option_toggle:focus {
  outline: none;
}

.option_btn:focus {
  outline: 0;
}

.option_btn_img {
  width: 30px;
  height: 30px;
  margin: 5px;
}


.option_btn {
  width: 350px;
  height: 54px;
  border-radius: 15px;
  background-color: white;
  border: 0;
  margin: 10px;
  display: flex;
  align-items: center;
  float: left;
}

.option_btn_txt {
  float: right;
  text-align: left;
}

.back_btn {
  text-align: left;
}

.back_btn_img {
  width: 50px;
}
</style>