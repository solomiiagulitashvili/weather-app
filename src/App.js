import React from 'react';
import './App.css';
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
        <div>
          <h1 className="header">MetaWeather</h1>
        </div>
        <WeatherButton weatherResponse={this.weatherResponse} />
        <RenderWeather weatherResponse={this.weatherResponse} />
        <RenderLocalWeather response={this.state.response} />
      </>
    );
  }
}

export default App;
