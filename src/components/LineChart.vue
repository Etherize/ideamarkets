<template>
  <canvas ref="myChart" :width="width" :height="height"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'LineChart',
  props: {
    // The canvas's width.
    width: {
      type: Number,
      validator: value => value > 0
    },

    // The canvas's height.
    height: {
      type: Number,
      validator: value => value > 0
    },

    // The chart's data.labels
    labels: Array,
    // The chart's data.datasets

    datasets: {
      type: Array,
      required: true,
    },

    // The chart's options.
    options: {
      title: {
          display: false,
          text: 'Custom Chart Title'
      }
    }
  },
  mounted() {
    new Chart(this.$refs.myChart, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    });
  }
}
</script>
