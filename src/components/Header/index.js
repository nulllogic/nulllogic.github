import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";


import config from "../../../content/meta/config";
import Menu from "../Menu";

import avatar from "../../images/jpg/avatar.jpg";

class Header extends React.Component {
  state = {
    fixed: false
  };

  render() {
    const { pages, path, theme } = this.props;
    const { fixed } = this.state;

    return (
      <React.Fragment>
        <div class="nav-helpdesk">
          <div class="container">
            <div class="row">
              <ul class="nav nav-horizontal">
                <li class="hamburger"><button><span class="line"></span><span class="line"></span><span class="line"></span></button></li>
                <li class="nav-logo"><Link to="/" ref={el => {this.myLink = el }}></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
