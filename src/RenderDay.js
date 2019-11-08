import React from 'react';
import tinytime from 'tinytime';
import convertIcon from './utils/convertIcon';
import convertTemperature from './utils/convertTemperature';

const RenderDay = ({ item }) => {
  const template = tinytime('{dddd}');
  return (
    <div>
      {template.render(new Date(item.time * 1000))}
      <br />
      <img
        src={convertIcon(item.icon)}
        alt={item.icon}
        width="35px" height="35px" >
      </img>
      <br />
      {convertTemperature(item.temperatureMax)} &deg; {''}
      {convertTemperature(item.temperatureMin)} &deg;
  </div>
  );
};


// class RenderDay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       daily: null,
//     };
//   }

//   render() {
//     if (this.props.daily === null) {
//       return (
//         null
//       );
//     }
//     console.log(this.props.daily);
//     const template = tinytime('{dddd}');
//     const { response: daily } = this.props;
//     return (
//       <>
//         {template.render(new Date(item.time * 1000))}
//         <br />
//         <img
//           src={convertIcon(item.icon)}
//           alt={item.icon}
//           width="35px" height="35px" >
//         </img>
//         <br />
//         {convertTemperature(item.temperatureMax)} &deg; {''}
//         {convertTemperature(item.temperatureMin)} &deg;
//       </>
//     );
//   }
// }

export default RenderDay;
