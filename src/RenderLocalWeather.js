import React from 'react';
import { Table } from 'reactstrap';
import convertIcon from './utils/convertIcon';
import convertTemperature from './utils/convertTemperature';
import RenderDay from './RenderDay';
import DrawChart from './DrawChart';


class RenderWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
    };
  }


  render() {
    if (this.props.response === null) {
      return (
        null
      );
    }
    console.log(this.props.response);
    // const template = tinytime('{dddd}');
    const { response: { currently, daily: { data: dData }, hourly: { data: hData } }, timezone } = this.props;

    return (
      <>
        <Table borderless>
          <thead>
            <tr>
              <th>{timezone} </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={convertIcon(currently.icon)}
                  alt={currently.icon}
                  width="50px" height="50px" >
                </img>
              </td>
              <td>{convertTemperature(currently.apparentTemperature)} &deg;C </td>
              <td>Rain: {''} {currently.precipProbability * 100} &#37;
                <br />
                Humidity: {''} {currently.humidity * 100} &#37;
                <br />
                Wind: {''} {currently.windSpeed} km/h
              </td>
            </tr>
          </tbody>
        </Table>
        <DrawChart data={hData} />
        <div className="render-day">
          {console.log(dData)}
          {dData && dData.map((day) => <RenderDay item={day} key={day.time} />)}
        </div>
      </>
    );
  }
}

export default RenderWeather;
