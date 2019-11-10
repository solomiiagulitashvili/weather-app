import React from 'react';
import {
  Table, TabPane, Row, Col,
} from 'reactstrap';
import convertIcon from './utils/convertIcon';
import convertTemperature from './utils/convertTemperature';


const DayExpanded = ({ item }) => (
  <>
    <TabPane tabId={item.time}>
      <Row>
        <Col sm="12">
          <Table borderless>
            <tbody>
              <tr>
                <td>
                  <img
                    src={convertIcon(item.icon)}
                    alt={item.icon}
                    width="50px" height="50px" >
                  </img>
                </td>
                <td>{convertTemperature(item.temperatureMax)} &deg;C
                      {'-'}
                  {convertTemperature(item.temperatureMin)} &deg;C
                    </td>
                <td>Rain: {''} {item.precipProbability * 100} &#37;
                        <br />
                  Humidity: {''} {item.humidity * 100} &#37;
                        <br />
                  Wind: {''} {item.windSpeed} km/h
                      </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </TabPane>
  </>

);

export default DayExpanded;
