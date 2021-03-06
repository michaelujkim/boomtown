import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import FlatButton from "material-ui/FlatButton";
import Logo from "../../images/boomtown-logo.svg";
import DropDownMenu from "material-ui/DropDownMenu";
import SelectField from "material-ui/SelectField";
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

class HeaderBar extends Component {
  state = {
    values: []
  };
  handleChange = (event, index, values) => this.setState({ values });

  render() {
    const { values } = this.state;
    if (this.state.values === 1) {
    }
    if (this.state.values === 2) {
    }
    return (
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
              <SelectField
                multiple={true}
                hintText="Select a name"
                value={values}
                onChange={this.handleChange}
              >
                <MenuItem value={1} primaryText="Electronics" />
                <MenuItem value={2} primaryText="Household Items" />
                <MenuItem value={3} primaryText="Musical Instruments" />
                <MenuItem value={4} primaryText="Physical Media" />
                <MenuItem value={5} primaryText="Recreational Equipment" />
                <MenuItem value={6} primaryText="Sporting Goods" />
                <MenuItem value={5} primaryText="Tools" />
              </SelectField>
            </div>
          </div>
        }
        iconElementRight={
          <div>
            <NavLink style={style.Bluebutton} to="/profile/user:id">
              Profile
            </NavLink>

            <NavLink style={style.Blackbutton} to="/login">
              Logout
            </NavLink>
          </div>
        }
      />
    );
  }
}

export default HeaderBar;
