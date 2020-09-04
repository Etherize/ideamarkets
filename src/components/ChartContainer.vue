<template>
  <div class="container">
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
export default {
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
  }
};
</script>
