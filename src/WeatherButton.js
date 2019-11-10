import React from 'react';
import { Button } from 'reactstrap';

class WeatherButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getWeather = (lat, long) => {
    fetch(`/forecast/8b064ed0fa2d7fc57f45f35a38154c96/${lat},${long}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } throw new Error('error');
      })
      .then((body) => {
        this.props.weatherResponse(body);
      })
      .catch((err) => {
        throw err;
      });
  }

  successFunction = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    this.getWeather(lat, long);
  }

  errorFunction = (error) => {
    if (error.code === 1) {
      alert("You've decided not to share your position, but it's OK. We won't ask you again.");
    } else if (error.code === 2) {
      alert("The network is down or the positioning service can't be reached.");
    } else if (error.code === 3) {
      alert('The attempt timed out before it could get the location data.');
    } else {
      alert('Geolocation failed due to unknown error.');
    }
  }

  handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successFunction, this.errorFunction);
    } else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }
  }

  render() {
    return (
      <>
        <Button outline color="primary" onClick={this.handleClick} >Show my local weather</Button>
        <span>or</span>
      </>
    );
  }
}

export default WeatherButton;
