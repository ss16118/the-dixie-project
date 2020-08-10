import React, { Component } from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import MobileApp from "./MobileApp";
import MediaQuery from "react-responsive";
import ScrollToTop from "./components/scrollToTop";

class WebApp extends Component {
  state = {};
  render() {
    return (
      <Router>
        <ScrollToTop>
          {/* Mobile devices */}
          <MediaQuery maxDeviceWidth={1224}>
            <MobileApp />
          </MediaQuery>
          {/* Desktop or laptop */}
          <MediaQuery minDeviceWidth={1224}>
            <App />
          </MediaQuery>
        </ScrollToTop>
      </Router>
    );
  }
}

export default WebApp;
