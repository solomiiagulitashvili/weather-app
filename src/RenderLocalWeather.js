import React from 'react';
import { TabContent, Nav } from 'reactstrap';
import RenderDay from './RenderDay';
import DrawChart from './DrawChart';
import DayExpanded from './DayExpanded';


class RenderWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      activeTab: null,
    };
  }


  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    if (this.props.response === null) {
      return (
        null
      );
    }
    console.log(this.props.response);
    // const template = tinytime('{dddd}');
    const { response: { daily: { data: dData }, hourly: { data: hData } }, timezone } = this.props;

    return (
      <>
        <div>
          <h3>{timezone}</h3>
        </div>
        <div>
          <Nav tabs>
            {dData && dData.map((day) => <RenderDay item={day} key={day.time}
              toggle={this.toggle} activeTab={this.state.activeTab} />)}
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            {dData && dData.map((day) => <DayExpanded item={day} key={day.time} />)}
          </TabContent>
        </div>
        <DrawChart data={hData} />
      </>
    );
  }
}

export default RenderWeather;
