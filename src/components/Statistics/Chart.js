import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series] = useState([60, 40]);

  const [options] = useState({
    chart: {
      width: "100%",
      height: "100%",
      type: "pie",
    },
    labels: ["Active Vehciles", "In-Active Vehciles"],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    // dataLabels: {
    //   formatter(val, opts) {
    //     const name = opts.w.globals.labels[opts.seriesIndex];
    //     return [name, val.toFixed(1) + "%"];
    //   },
    // },
    legend: {
      show: false,
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="pie" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
