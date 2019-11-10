import React from 'react';
import './App.css';
import { Alert } from 'reactstrap';
import WeatherButton from './WeatherButton';
import RenderLocalWeather from './RenderLocalWeather';
import RenderWeather from './RenderWeather';
// import DropdownSearch from './DropdownSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
    };
  }

  weatherResponse = (body) => {
    this.setState({ response: body });
  }

  render() {
    return (
      <>
        <div className="header">
          <h1 className="title">MetaWeather</h1>
          <span>Powered by darksky.net</span>
        </div>
        <div className="container">
          <div className="navigation-btns">
            <WeatherButton weatherResponse={this.weatherResponse} />
            <RenderWeather weatherResponse={this.weatherResponse} />
          </div>
          <Alert color="primary">
            Select location
          </Alert>
        </div>
        <RenderLocalWeather response={this.state.response} />
      </>
    );
  }
}

export default App;
