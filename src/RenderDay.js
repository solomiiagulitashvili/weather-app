import React from "react";
import tinytime from "tinytime";
import { NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import convertIcon from "./utils/convertIcon";
import convertTemperature from "./utils/convertTemperature";

const RenderDay = ({ item, activeTab, toggle }) => {
  const template = tinytime("{dddd}");
  return (
    <NavItem>
      <NavLink
        className={classnames({ active: activeTab === item.time })}
        onClick={() => {
          toggle(item.time);
        }}
      >
        <div>
          {template.render(new Date(item.time * 1000))}
          <br />
          <img
            src={convertIcon(item.icon)}
            alt={item.icon}
            width="35px"
            height="35px"
          ></img>
          <br />
          {convertTemperature(item.temperatureMax)} &deg; {""}
          {convertTemperature(item.temperatureMin)} &deg;
        </div>
      </NavLink>
    </NavItem>
  );
};

export default RenderDay;
