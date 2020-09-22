  <template>
  <div>
    <p class="card_subtitle">Debit Card</p>
    <b-container>
        <b-row cols="1">
              <input v-model='cardNumValue' class='card_input card_input_top' placeholder="4243 2342 2413 4324">
        </b-row>
        <b-row cols="2">
              <input v-model='cardDateValue' style='  border-right: 2px solid #085bff;' class='card_input card_input_bottom_left card_input_date' placeholder="12/2000">
              <input v-model='cardCvvValue' class='card_input card_input_bottom_right' placeholder="CVV">
        </b-row>
      </b-container>
  </div>
</template>

<script>

export default {
  name: 'CardDetails',
  data() {
    return {
      cardNumValue: '',
      cardDateValue: '',
      cardCvvValue: '',
    }
  },
}
</script>



<style>


</style>
