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
    min-width: 108px;
    border: none;
    min-height: 22px;
    border-radius: 9px;
    background-color:	#508cfe;
  }

.focus_button {
  background-color:	#a7c6ff;
  border: none;
}
</style>
