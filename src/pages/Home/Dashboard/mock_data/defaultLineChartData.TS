/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const defaultLineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec","Jan"],
  datasets: [
    {
      label: "Software",
      color: "dark",
      data: [750, 900, 300, 150, 550, 600, 450, 800,820, 300],
    },
    {
      label: "Equipment",
      color: "primary",
      data: [600, 500, 300, 650, 260, 260, 750, 450,450,300],
    },
  ],
};

export default defaultLineChartData;
