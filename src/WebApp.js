import React, { Component } from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import MobileApp from "./MobileApp";
import MediaQuery from "react-responsive";
import ScrollToTop from "./components/scrollToTop";
import "semantic-ui-css/semantic.min.css";

class WebApp extends Component {
  state = {};
  render() {
    return (
      <Router basename="/the-dixie-project/">
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
