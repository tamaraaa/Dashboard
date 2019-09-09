import React, { useEffect, useCallback, useState } from "react";
import "./bar_chart.scss";
import * as d3 from "d3";

const BarChart = ({ companies }) => {
  let [sumOfVisitors, setSumOfVisitors] = useState(0);
  console.log(companies);

  const drawChart = useCallback(() => {
    const scaleStart = d3.min(companies, c => c.visitors);
    const scaleEnd = d3.max(companies, c => c.visitors);
       const myColor = d3
      .scaleOrdinal()
      .domain([scaleStart, scaleEnd])
      .range(["#F8C675", "rgb(221, 44, 74)"]);
      var margin = { top: 10, right: 20, bottom: 60, left: 30 };
      var width = 400 - margin.left - margin.right;
      var height = 565 - margin.top - margin.bottom;
      
      var svg = d3.select('.bar_chart')
        .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .call(responsivefy)
        .append('g')
          .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
      
      
      var yScale = d3.scaleLinear()
        .domain([scaleStart,scaleEnd])
        .range([height, 0]);
     
    var xScale = d3
      .scaleBand()
      .padding(0.2)
      .domain(companies.map(d => d.name))
      .range([0, width]);
      
    var xAxis = d3
      .axisBottom(xScale)
      .ticks(5)
      .tickSize(10)
      .tickPadding(5);
    svg
      .append('g')
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .selectAll('text')
      .style("text-anchor", "end")
      .attr("transform", "rotate(-45)");

      
      svg.selectAll('rect')
        .data(companies)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.name))
        .attr('y', d => yScale(d.visitors))
        .attr('width', d => xScale.bandwidth())
        .attr('height', d => height - yScale(d.visitors));
      
      function responsivefy(svg) {
        // get container + svg aspect ratio
        var container = d3.select(svg.node().parentNode),
            width = parseInt(svg.style("width")),
            height = parseInt(svg.style("height")),
            aspect = width / height;
      
        // add viewBox and preserveAspectRatio properties,
        // and call resize so that svg resizes on inital page load
        svg.attr("viewBox", "0 0 " + width + " " + height)
            .attr("preserveAspectRatio", "xMinYMid")
            .call(resize);
      
        // to register multiple listeners for same event type,
        // you need to add namespace, i.e., 'click.foo'
        // necessary if you call invoke this function for multiple svgs
        // api docs: https://github.com/mbostock/d3/wiki/Selections#on
        d3.select(window).on("resize." + container.attr("id"), resize);
      
        // get width of container and resize svg to fit it
        function resize() {
            var targetWidth = parseInt(container.style("width"));
            svg.attr("width", targetWidth);
            svg.attr("height", Math.round(targetWidth / aspect));
        }
      }
  }, [companies]);

  useEffect(() => {
    if (companies) {
      drawChart();
      setSumOfVisitors(
        companies.reduce((acc, obj) => {
          return acc + obj.visitors;
        }, 0)
      );
    }
  }, [companies, drawChart]);
  return (
    <div className="bar_chart">
      <span>All current visitors:{sumOfVisitors}</span>
    </div>
  );
};
export default BarChart;
