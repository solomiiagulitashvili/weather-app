import React from 'react';
import { Input } from 'reactstrap';
import sortResponse from './utils/sortResponse';

class RenderWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  geocoder = () => {
    const { input } = this.state;
    const encoded = encodeURIComponent(input);
    console.log(input);
    if (encoded.length > 3) {
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encoded}&key=f738ec12197e4ef28c2787ac394d5025`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } throw new Error('err');
        })
        .then((body) => {
          console.log(body);
          const sorted = body.results.sort(sortResponse);
          console.log(sorted);
          const { lat, lng } = sorted[0].geometry;
          console.log(lat, lng);
          return fetch(`/forecast/8b064ed0fa2d7fc57f45f35a38154c96/${lat},${lng}`);
        })
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
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  onKeyPress = (e) => {
    console.log(e);
    if (e.charCode === 13) {
      this.geocoder();
    }
  }

  render() {
    return (
      <Input type="text" name="cities" placeholder="Enter your city" value={this.state.input} onChange={this.onInputChange} onKeyPress={this.onKeyPress} />
    );
  }
}

export default RenderWeather;
