import React, { Component } from 'react';
import Social from "../components/social";

class Header extends Component {
  render() {
    return (
      <Social {...this.props} />
    )
  }
}

export default Header;