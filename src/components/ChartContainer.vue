<template>
  <b-container>
    <b-row align-h="center" class="graphTitle">
      $COINDESK(+14%)
    </b-row>
    <b-row class="p-5">
    <line-chart
      :width="500"
      :height="300"
      :labels="['', '', '', '', '']"
      :options="$options.options"
      :datasets="$options.datasets"
    ></line-chart>
    <div v-if="$apollo.loading">Loading GraphQL..</div>
    </b-row>
    <b-row cols="4" class="graph-text">
      <b-col>
        <b-row>
          <p class="topText">Trading At</p>
        </b-row>
        <b-row>
          <p class="bottomText">$3.14</p>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
            <p class="topText">Total Locked</p>
        </b-row>
        <b-row>
          <p class="bottomText">$1.3M</p>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
            <p class="topText">Holders</p>
        </b-row>
        <b-row>
          <p class="bottomText">1.2k</p>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
            <p class="topText">Rank</p>
        </b-row>
        <b-row>
          <p class="bottomText">3</p>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>

  .topText {
    margin:0 auto;
    color: white;
  }

  .bottomText {
    margin: 0 auto;
    color: white;
    font-size: 1.5rem;
  }

  .graphTitle{
    color: white;
    font-size: 16pt;
  }
</style>

<script>
import { gql } from "apollo-boost";
import LineChart from './LineChart';

const options = {
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
                display: false
            }
        }],
    },
    labels: {
      display: false
    },
    legend: {
      display: false
    },
    layout: {
        padding: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
        }
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
