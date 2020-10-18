import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Header, Grid, Segment, Image } from "semantic-ui-react";

class SiteHeader extends Component {
  constructor(props) {
    super(props);
    let itemName = window.location.pathname.substr(19);
    if (itemName === "") {
      itemName = "首页";
    } else {
      itemName = itemName === "all-posts" ? "博文目录" : itemName;
    }
    this.state = {
      activeItem: itemName,
    };
  }

  handleItemClick = (_, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const leftPadding = "2em";
    return (
      <Grid.Row columns={1} style={{ paddingBottom: 0 }}>
        <Segment
          className="semi-transparent"
          style={{
            margin: `2em 10em`,
            width: "100%",
          }}
        >
          <Grid>
            <Grid.Row columns={2} style={{ padding: `2em ${leftPadding}` }}>
              <Grid.Column width={1} textAlign="left">
                <Image
                  src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
                  size="tiny"
                  circular
                  style={{ margin: 0 }}
                />
              </Grid.Column>
              <Grid.Column width={15} textAlign="left">
                <Header as="h1" style={{ paddingTop: "0.3em" }}>
                  心的方向
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} style={{ padding: `2em ${leftPadding}` }}>
              <Menu pointing secondary>
                <Menu.Item
                  as={Link}
                  to="/"
                  name="首页"
                  active={activeItem === "首页"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={Link}
                  to="/all-posts"
                  name="博文目录"
                  active={activeItem === "博文目录"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Row>
    );
  }
}

export default SiteHeader;
