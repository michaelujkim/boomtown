import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import FlatButton from "material-ui/FlatButton";
import Logo from "../../images/boomtown-logo.svg";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import style from "./style.js";
function handleClick() {
  alert("onClick triggered on the title component");
}

const styles = {
  title: {
    cursor: "pointer"
  }
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const handleChange = (event, index, value) => this.setState({ value });
const HeaderBar = () => (
  <AppBar
    style={style.Header}
    iconElementLeft={
      <div style={style.Headerrightbuttons}>
        <div>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div>
          <DropDownMenu value={1} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </DropDownMenu>
        </div>
      </div>
    }
    iconElementRight={
      <div>
        <NavLink style={style.Bluebutton} to="/profile/user:id">
          Profile
        </NavLink>

        <NavLink style={style.Blackbutton} to="/login">
          Login
        </NavLink>
      </div>
    }
  />
);

export default HeaderBar;
