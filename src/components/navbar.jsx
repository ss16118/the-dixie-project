import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Loader,
  Image,
  Menu,
  Segment,
  Dropdown,
  Input,
  Icon,
  Button,
} from "semantic-ui-react";
import tagsToEnglish from "../data/tagsInEnglish.json";

class NavBar extends Component {
  state = {};
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
      postsPartitionedByTags: props.postsPartitionedByTags,
      postsPartitionedByDate: props.postsPartitionedByDate,
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleSearchClick = () => {
    const encodedValue = new Buffer(this.state.searchValue).toString("hex");
    window.location.href = `${process.env.PUBLIC_URL}/search/${encodedValue}`;
  };
  render() {
    const { activeItem } = this.state;
    const { postsPartitionedByTags } = this.state;
    const { postsPartitionedByDate } = this.state;
    return (
      <Segment
        id="navbar"
        style={{
          padding: "0.5em",
          width: "100%",
          borderRadius: 0,
          position: "fixed",
          zIndex: "1000",
        }}
      >
        <Menu pointing secondary style={{ fontSize: "10px" }}>
          <Menu.Item
            as={Link}
            to="/"
            name="首页"
            active={activeItem === "首页"}
            onClick={this.handleItemClick}
          >
            <Image
              circular
              src={process.env.PUBLIC_URL + "/favicon/favicon-32x32.png"}
              onClick={() => (window.location.href = process.env.PUBLIC_URL)}
            />
          </Menu.Item>
          <Menu.Item
            name="博文目录"
            as={Link}
            to="/all-posts"
            active={activeItem === "博文目录"}
            onClick={this.handleItemClick}
          >
            博文目录
          </Menu.Item>

          {/* Archive */}
          <Dropdown item text="归档" scrolling>
            <Dropdown.Menu>
              {(!postsPartitionedByDate && (
                <Dropdown.Item style={{ minHeight: "50px" }}>
                  <Loader active size="mini">
                    Loading
                  </Loader>
                </Dropdown.Item>
              )) ||
                (postsPartitionedByDate && (
                  <React.Fragment>
                    {Object.keys(postsPartitionedByDate).map((year) => {
                      let postCount = 0;
                      const monthMenu = (
                        <React.Fragment>
                          {Object.keys(postsPartitionedByDate[year]).map(
                            (month) => {
                              const monthLabel =
                                month < 10 ? "0" + month : month;
                              postCount +=
                                postsPartitionedByDate[year][month].length;
                              return (
                                <Dropdown.Item
                                  as={Link}
                                  to={`/posts-${year}-${month}`}
                                  key={month}
                                  style={{ padding: "0.5em 0" }}
                                >
                                  {`${monthLabel}月 (${postsPartitionedByDate[year][month].length})`}
                                </Dropdown.Item>
                              );
                            }
                          )}
                        </React.Fragment>
                      );
                      return (
                        <React.Fragment key={year}>
                          <Dropdown.Header>{`${year}年 (${postCount})`}</Dropdown.Header>
                          {monthMenu}
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Tags */}
          <Dropdown item text="标签">
            <Dropdown.Menu>
              {(!postsPartitionedByTags && (
                <Dropdown.Item style={{ minHeight: "50px" }}>
                  <Loader active size="mini">
                    Loading
                  </Loader>
                </Dropdown.Item>
              )) ||
                (postsPartitionedByTags && (
                  <React.Fragment>
                    {Object.keys(postsPartitionedByTags).map((tag) => {
                      return (
                        <Dropdown.Item
                          as={Link}
                          to={`/posts-${tagsToEnglish[tag]}`}
                          key={tag}
                          style={{ padding: "0.5em 0" }}
                        >
                          {`${tag} (${postsPartitionedByTags[tag].length})`}
                        </Dropdown.Item>
                      );
                    })}
                  </React.Fragment>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item style={{ paddingLeft: 0 }}>
            <Input
              placeholder="输入关键词..."
              onChange={(e) => this.setState({ searchValue: e.target.value })}
              style={{ width: "85px", height: "27px" }}
            >
              <input />
              <Button
                icon={<Icon name="search" size="mini" />}
                onClick={() => this.handleSearchClick()}
              ></Button>
            </Input>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}

export default NavBar;
