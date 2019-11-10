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
        vAxis: { minValue: 0 },
        chartArea: { width: '80%', height: '80%' },
      }}
    />
  );
};

export default DrawChart;
