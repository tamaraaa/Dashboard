import React, { useEffect, useCallback, useState } from "react";
import "./bar_chart.scss";
import * as d3 from "d3";

const BarChart = ({ companies }) => {
  let [sumOfVisitors, setSumOfVisitors] = useState(0);
  console.log(sumOfVisitors);
  const margin = { left: 50, top: 10, right: 50, bottom: 30 };

  const drawChart = useCallback(() => {
    const w = "50%";
    const h = 300;
    let data = companies.map(a => a.visitors);
    let companiesName = companies.map(a => a.name);
    console.log(companiesName);
    const myColor = d3
      .scaleOrdinal()
      .domain(data)
      .range(["#F8C675", "rgb(221, 44, 74)"]);

    const svg = d3
      .select(".bar_chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr(
        "viewBox",
        "0 0 " +
          (w + margin.left + margin.right) +
          " " +
          (h + margin.top + margin.bottom)
      )
      .style("margin", "0 auto");

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", "10%")
      .attr("height", (d, i) => d * 70)
      .attr("fill", function(d) {
        return myColor(d);
      });

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d - 3);
  }, [companies, margin.bottom, margin.left, margin.right, margin.top]);

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
