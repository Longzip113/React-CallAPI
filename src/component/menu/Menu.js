import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
var menuList = [
  {
    to: "/",
    label: "Home",
    Exact: true,
  },
  {
    to: "/products",
    label: "Manage Product",
    Exact: false,
  },
];

const CustomLink = ({to, label, activeOnlyWhenExact}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={`my-li ${active}`}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">CALL API</a>
        <ul className="nav navbar-nav">{this.showMenu(menuList)}</ul>
      </div>
    );
  }

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((item, index) => {
        return (
          <CustomLink
            key={index}
            to={item.to}
            label={item.label}
            activeOnlyWhenExact={item.Exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
