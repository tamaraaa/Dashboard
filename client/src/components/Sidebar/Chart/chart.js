import React from "react";
import "./chart.scss";

const Chart = props => (
  <svg width={500} height={450} {...props}>
    <path
      d="M0 329.227c62.942-30.873 113.921-34.434 152.938-10.683 58.524 35.626 90.4 54.667 136.495 61.792 46.094 7.126 129.056-22.81 156.126-19.888 18.047 1.948 36.194 6.46 54.441 13.537V500H0V329.227z"
      className="shape"
      fill="#FFF"
      opacity={0.1}
    />
    <path
      d="M0 386.78c41.094-12.664 68.782-16.407 83.064-11.231 21.423 7.764 32.074 15.816 67.59 11.23 35.517-4.585 88.176-74.02 152.284-74.02 64.109 0 66.209 34.567 117.873 34.567 34.443 0 60.84-9.6 79.189-28.798V500H0V386.78z"
      className="shape"
      fill="#FFF"
      opacity={0.1}
    />
    <path
      d="M0 386.78c41.094-12.664 68.782-16.407 83.064-11.231 21.423 7.764 32.074 15.816 67.59 11.23 35.517-4.585 88.176-74.02 152.284-74.02 64.109 0 66.209 34.567 117.873 34.567 34.443 0 60.84-9.6 79.189-28.798"
      className="line"
      stroke="#FFF"
      strokeWidth={3}
    />
  </svg>
);

export default Chart;
