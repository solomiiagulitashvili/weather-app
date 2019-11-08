import React from 'react';
import { Chart } from 'react-google-charts';
import tinytime from 'tinytime';
import convertTemperature from './utils/convertTemperature';

const DrawChart = ({ data }) => {
  const template = tinytime('{H}');

  const array = data.map((item) => [template.render(new Date(item.time * 1000)),
    convertTemperature(item.apparentTemperature)]);
  array.unshift(['time', 'temperature']);
  const arraySlised = array.slice(0, 25);
  console.log(arraySlised);
  return (
    <Chart
      width="100%"
      height="250px"
      chartType="AreaChart"
      // loader={< div > Loading Chart</div >}
      data={arraySlised}
      options={{
        // hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        // For the legend to fit, we make the chart area smaller
        chartArea: { width: '80%', height: '80%' },
        // lineWidth: 25
      }}
    />
  );
};

export default DrawChart;
