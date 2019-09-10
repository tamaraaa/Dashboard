import React, { useCallback, useState, useEffect } from "react";
import * as d3 from "d3";
import "./bar_chart.scss";

const BarChart = ({ companies }) => {
  let [sumOfVisitors, setSumOfVisitors] = useState(0);

  const drawChart = useCallback(() => {
    const scaleStart = d3.min(companies, c => c.visitors);
    const scaleEnd = d3.max(companies, c => c.visitors);
    const myColor = d3
      .scaleOrdinal()
      .domain([scaleStart, scaleEnd])
      .range(["#F8C675", "rgb(221, 44, 74)"]);

    const margin = { top: 10, right: 20, bottom: 60, left: 30 };
    const width = 450 - margin.left - margin.right;
    const height = 350 - margin.top - margin.bottom;

    const svg = d3
      .select(".bar_chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .call(responsivefy)
      .append("g")
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    const yScale = d3
      .scaleLinear()
      .domain([0, scaleEnd * 1.2])
      .range([height, 0]);
    const yAxis = d3.axisLeft(yScale);
    svg.call(yAxis);

    const xScale = d3
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
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("transform", "rotate(-45)");

    svg
      .selectAll("rect")
      .data(companies)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.name))
      .attr("y", d => yScale(d.visitors))
      .attr("width", d => xScale.bandwidth())
      .attr("height", d => height - yScale(d.visitors))
      .style("fill", d => myColor(d.visitors));

    function responsivefy(svg) {
      const container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

      svg
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMinYMid")
        .call(resize);

      d3.select(window).on("resize." + container.attr("id"), resize);

      function resize() {
        var targetWidth = parseInt(container.style("height"));
        svg.attr("height", targetWidth);
        svg.attr("width", Math.round(targetWidth / aspect));
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
