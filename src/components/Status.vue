<template>
  <b-container>
    <b-row cols="3">
      <b-col><button className="status_button"></button></b-col>
      <b-col><button className="status_button"></button></b-col>
      <b-col><button className="status_button"></button></b-col>
    </b-row>
   </b-container>
</template>

<script>
export default {
  name: 'Status',
}
</script>

<style scoped>
.status_button {
    min-width: 126px;
    min-height: 54px;
    border-radius: 15px;
    background-color: red;
  }
</style>
