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
import { useMemo } from 'react';
// react-chartjs-2 components
import { Line } from 'react-chartjs-2';

// @mui material components
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
// porp-types is a library for typechecking of props
import PropTypes from 'prop-types';

// DefaultLineChart configurations
import configs from '@/components/DefaultLineChart/configs';
// Soft UI Dashboard PRO React components
import SoftBox from '@/components/SoftBox';
// Soft UI Dashboard PRO React base styles
import colors from '@/theme/base/colors';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function DefaultLineChart({
  title = '',
  description = '',
  height = '21rem',
  chart,
}: {
  title?: string;
  description?: any;
  height?: string;
  chart: any;
}) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset: any) => ({
        ...dataset,
        tension: 0,
        borderWidth: 1,
        pointRadius: 5,
        pointBackgroundColor: 'white',
        borderColor: colors[dataset.color as keyof typeof colors]
          ? colors[dataset.color as keyof typeof colors].main
          : 'red',
        maxBarThickness: 6,
      }))
    : [];

  const { data, options }: any = configs(chart.labels || [], chartDatasets);

  const renderChart = (
    <SoftBox p={1}>
      {useMemo(
        () => (
          <SoftBox height={height}>
            <Line data={data} options={options} />
          </SoftBox>
        ),
        [chart, height],
      )}
    </SoftBox>
  );

  return title || description ? <SoftBox>{renderChart}</SoftBox> : renderChart;
}

// Setting default values for the props of DefaultLineChart
DefaultLineChart.defaultProps = {
  title: '',
  description: '',
  height: '19.125rem',
};

// Typechecking props for the DefaultLineChart
DefaultLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default DefaultLineChart;
