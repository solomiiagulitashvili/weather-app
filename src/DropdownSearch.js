import React from 'react';
import {
  Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import Simplesky from 'simplesky';


class DropdownSearch extends React.Component {
  constructor(props) {
    super(props);
    this.weather = new Simplesky('AIzaSyB_nIhO6J3kWv_8ev2gGu40AvyZ6I8th8k', '8b064ed0fa2d7fc57f45f35a38154c96');
    this.state = {
      input: '',
      dropdownOpen: false,
    };
  }


  toggle = () => {
    const { dropdownOpen } = this.state;
    this.setState({ dropdownOpen: !dropdownOpen });
  }

  // citiesList = () => {
  //   const { input } = this.state;
  //   fetch(`/api/location/search/?query=${input}`)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } throw new Error('error');
  //     })
  //     .then((citiesArray) => {
  //       console.log(citiesArray);
  //       const array = citiesArray.map((city) => ({ title: city.title, woeid: city.id }));
  //       this.setState({ cities: array });
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // }

  getWeather = () => {
    console.log(this.state.input);
    this.weather.getCurrently(this.state.input).then((response) => {
      console.log(response.temperature);
    }).catch((error) => {
      console.log(error);
    });
  }


  onInputChange = (event) => {
    // const { cities } = this.state;
    this.setState({ input: event.target.value });
    if (event.target.value.length >= 3) {
      this.getWeather();
    }

    // this.citiesList();
  }

  // GetLatlong = () => {
  //   const { google } = window;
  //   const geocoder = new google.maps.Geocoder();
  //   const { input } = this.state.input;

  //   geocoder.geocode({ address: input }, (results, status) => {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       const latitude = results[0].geometry.location.lat();
  //       const longitude = results[0].geometry.location.lng();
  //       this.getWeather(latitude, longitude);
  //     }
  //   });
  // };

  // getWeather = (latitude, longitude) => {
  //   fetch(`/forecast/8b064ed0fa2d7fc57f45f35a38154c96/${latitude}, ${longitude}`)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } throw new Error('error');
  //     })
  //     .then((body) => console.log(body))
  //     .catch((err) => {
  //       throw err;
  //     });
  // }

  render() {
    const { dropdownOpen } = this.state;
    return (
      <>
        <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          <Input type="text" name="cities" id="cities" placeholder="Enter your city" value={this.state.input} onChange={this.onInputChange} />
        </DropdownToggle>
        {/* <DropdownMenu>
        {this.state.cities.length
          ? () => this.state.cities.map((city) => <DropdownItem>{city.title} </DropdownItem>)
          : <DropdownItem>No city choosen </DropdownItem>
        }
        </DropdownMenu> */}
      </Dropdown>
      </>
    );
  }
}

export default DropdownSearch;
