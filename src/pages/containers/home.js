import React, { Component } from 'react';
import HomeLayout from "../components/home-layout";
import Header from "../../headers/containers/header";

class Home extends Component {
  render() {
    const data = this.props.data;

    return (
      <HomeLayout>
        <Header {...data} />
      </HomeLayout>
    )
  }
}

export default Home;