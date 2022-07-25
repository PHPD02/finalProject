import React, { Component} from 'react';
import * as d3 from 'd3';

class Try extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: null
      }
  
      this.fetchData = this.fetchData.bind(this);
      this.barChart = this.barChart.bind(this);
    }
  
    componentDidMount() {
      this.fetchData();
      this.barChart(this.state.data);
    }
  
    fetchData() {
      const API = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
  
      fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data
        })
      })
    }
  
    barChart(dataset) {
      const canvasWidth = 600;
      const canvasHeight = 400;
      const svgCanvas = d3.select(this.ref.canvas)
                       .append('svg')
                       .attr('width', canvasWidth)
                       .attr('height', canvasHeight)
  
      const xScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset, d => d[0])])
                        .range([0, canvasWidth])
  
      const yScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset, d => d[1])])
                        .range([canvasHeight, 0])
  
      svgCanvas.selectAll('rect')
              .data(dataset)
              .enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('x', (d, i) => i * 30)
                .attr('y', d => yScale(d[1]))
                .attr('width', xScale(25))
                .attr('height', d => yScale(d[1]))
  
    }
  
    render() {
      return (
        <d>
          <div id='title'>my chart</div>
          <div ref='canvas'></div>
        </d>
      )
    }
  }
  
 
export default Try;