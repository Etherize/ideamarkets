<template>
  <b-container class="status_bar">
    <b-row >
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
    }
  }
}
</script>

<style scoped>

.status_bar {
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
  margin-bottom: 20px;
  }

.status_button {
    min-width: 102px;
    border: none;
    outline: none;
    min-height: 20px;
    border-radius: 9px;
    background-color:	#508cfe;
  }

  .status_button:hover{
    opacity: .8;
  }

.focus_button {
  background-color:	#a7c6ff;
  border: none;
  outline: none;
}
</style>
