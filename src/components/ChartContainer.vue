<template>
  <div class="container">
    <line-chart
      :width="500"
      :height="300"
      :labels="['', '', '', '', '']"
      :options="$options.options"
      :datasets="$options.datasets"
    ></line-chart>
    <canvas ref="myChart" width="500" height="300"></canvas>
    <div v-if="$apollo.loading">Loading GraphQL..</div>
</div>
</template>

<script>
import { gql } from "apollo-boost";
import LineChart from './LineChart';

const options = {
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            },
            display: false
        }],

    }
}


const datasets = [
  {
    label: '',
    labelColor: 'white',
    data: [300, 500, 450, 550, 470],
    backgroundColor: 'rgba(0, 0, 255, 0)',
    borderColor: 'rgba(255, 255, 255, .8)'
  }
];

export default {
  name: 'ChartContainer',
  datasets,
  options,
  components: {
    LineChart
  },
  data: function() {
    return {
        //query data is added
      viewer: {}
    };
  },


  apollo: {
      //this query will update the `viewer` data property
    viewer: {
      query: gql`query
       {
          votes(first:20, where: { orgAddress: "0xC27ADc37D1bf50e85A066De09092B01C21f7Dd7E"}){
          id
          creator
          metadata
          executed
          yea
          nay
          minAcceptQuorum
        }
       }
      `
    }
  },
};

</script>
