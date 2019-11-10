import React from 'react';
import tinytime from 'tinytime';
import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import convertIcon from './utils/convertIcon';
import convertTemperature from './utils/convertTemperature';

const RenderDay = ({
  item, activeTab, toggle,
}) => {
  const template = tinytime('{dddd}');
  return (
    <NavItem>
      <NavLink
        className={classnames({ active: activeTab === item.time })}

        onClick={() => { toggle(item.time); }}
      >
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

      </NavLink>
    </NavItem>

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
