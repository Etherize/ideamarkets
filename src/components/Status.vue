<template>
  <b-container>
    <b-row cols="3">
      <b-col><button  :class="{focus_button: this.$store.state.loginStep === 0}" class="status_button" v-on:click='onStepOne'></button></b-col>
      <b-col><button  :class="{focus_button: this.$store.state.loginStep === 1}" class="status_button" v-on:click='onStepTwo'></button></b-col>
      <b-col><button  :class="{focus_button: this.$store.state.loginStep === 2}" class="status_button" v-on:click='onStepThree'></button></b-col>
    </b-row>
   </b-container>
</template>

<script>
export default {
  name: 'Status',
  methods: {
    onStepOne: function() {
      this.$store.commit('SET_LOGIN_STEP', 0);
    },

    onStepTwo: function() {
      this.$store.commit('SET_LOGIN_STEP', 1);
      this.$store.commit('SET_PAYMENT_TYPE', 0);
    },

    onStepThree: function() {
      this.$store.commit('SET_LOGIN_STEP', 2);
    },
  }
}
</script>

<style scoped>
.status_button {
    min-width: 126px;
    min-height: 30px;
    border-radius: 15px;
    background-color: blue;
  }

.focus_button {
  background-color: white;
}
</style>
