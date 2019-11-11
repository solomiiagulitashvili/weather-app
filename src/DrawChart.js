import React from 'react';
import { Chart } from 'react-google-charts';
import tinytime from 'tinytime';
import { Alert } from 'reactstrap';
import convertTemperature from './utils/convertTemperature';


const DrawChart = ({ data, index }) => {
  const template = tinytime('{H}');

  const array = data.map((item) => [template.render(new Date(item.time * 1000)),
  convertTemperature(item.apparentTemperature)]);


  let arraySlised;
  if (index === 0) {
    arraySlised = array.slice(0, 25);
  } else if (index === 1) {
    arraySlised = array.slice(25, 48);
  } else {
    return (
      <Alert color="primary">
        No hourly forecast for this day
          </Alert>
    );
  }
  arraySlised.unshift(['time', 'temperature']);

  console.log(arraySlised);
  return (
    <Chart
      width="100%"
      height="250px"
      chartType="AreaChart"
      data={arraySlised}
      options={{
        vAxis: { minValue: 0 },
        chartArea: { width: '95%', height: '80%' },
        legend: 'none',
      }}
    />
  );
};

export default DrawChart;
