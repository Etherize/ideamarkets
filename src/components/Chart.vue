<template>
  <div>
    <h2>$COINDESK (+12%)</h2>
    <svg></svg>
    <b-container>
      <b-row  cols="4">
          <b-col>
           <h5>Trading At</h5>
           <p> $3.14 </p>
         </b-col>
         <b-col>
          <h5>Total Locked</h5>
          <p> $1.2M </p>
        </b-col>
        <b-col>
         <h5>Holders</h5>
         <p> 1.2k </p>
       </b-col>
       <b-col>
        <h5>Rank</h5>
        <p> 3 </p>
      </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script src="https://d3js.org/d3.v4.js"></script>


<script>
import * as d3 from 'd3'
export default {
  data () {
    return {}
  },
  mounted () {
    // let marge = { top: 60, bottom: 60, left: 60, right: 60 }
    let dataset = [250, 210, 170, 130, 90]
    let svg = d3.select('svg')
    let g = svg.append('g')
    // .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')
    let rectHeight = 30
    g.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', function (d, i) {
        return i * rectHeight
      })
      .attr('width', function (d) {
        return d
      })
      .attr('height', rectHeight - 5)
      .attr('fill', 'lightblue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
