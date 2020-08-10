import React, { Component } from "react";
import {
  Segment,
  Grid,
  Accordion,
  List,
  Header,
  Menu,
  Loader,
  Input,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import tagsToEnglish from "../data/tagsInEnglish.json";

class SideBar extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      postsPartitionedByDate: props.postsPartitionedByDate,
      postsPartitionedByTags: props.postsPartitionedByTags,
      activeYear: 0,
      searchValue: "",
    };
  }

  handleYearMenuClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeYear } = this.state;
    const newIndex = activeYear === index ? -1 : index;
    this.setState({ activeYear: newIndex });
  };

  handleSearchClick = () => {
    const encodedValue = new Buffer(this.state.searchValue).toString("hex");
    window.location.href = `/search/${encodedValue}`;
  };

  render() {
    const { postsPartitionedByDate } = this.state;
    const { postsPartitionedByTags } = this.state;
    const { activeYear } = this.state;
    return (
      <Grid.Column style={{ padding: "0 1em 0 0" }} width={4}>
        <Grid style={{ marginLeft: 0 }}>
          {/* Search */}
          <Grid.Row columns={1}>
            <Segment
              className="semi-transparent"
              style={{ width: "100%", minHeight: "100px" }}
            >
              <Header as="h3">关键词搜索</Header>
              <Input
                action={{
                  icon: "search",
                  onClick: () => this.handleSearchClick(),
                }}
                placeholder="请输入关键词..."
                onChange={(e) => this.setState({ searchValue: e.target.value })}
                style={{ width: "100%" }}
              />
            </Segment>
          </Grid.Row>
          {/* Partitioned by date */}
          <Grid.Row columns={1}>
            <Segment
              className="semi-transparent"
              style={{ width: "100%", minHeight: "200px" }}
            >
              <Header as="h3">归档</Header>
              <Accordion
                as={Menu}
                vertical
                style={{
                  background: "none",
                  width: "100%",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                {(!postsPartitionedByDate && <Loader active>Loading</Loader>) ||
                  (postsPartitionedByDate &&
                    Object.keys(postsPartitionedByDate).map((year) => {
                      let postCount = 0;
                      const monthMenu = (
                        <List style={{ marginLeft: "2em" }}>
                          {Object.keys(postsPartitionedByDate[year]).map(
                            (month) => {
                              const monthLabel =
                                month < 10 ? "0" + month : month;
                              postCount +=
                                postsPartitionedByDate[year][month].length;
                              return (
                                <List.Item
                                  as={Link}
                                  to={`/posts-${year}-${month}`}
                                  key={month}
                                  style={{ padding: "0.5em 0" }}
                                >
                                  {`${monthLabel}月 (${postsPartitionedByDate[year][month].length})`}
                                </List.Item>
                              );
                            }
                          )}
                        </List>
                      );

                      return (
                        <React.Fragment key={year}>
                          <Accordion.Title
                            active={activeYear === year}
                            content={`${year}年 (${postCount})`}
                            index={year}
                            onClick={this.handleYearMenuClick}
                          />
                          <Accordion.Content
                            active={activeYear === year}
                            content={monthMenu}
                            style={{ padding: 0 }}
                          />
                        </React.Fragment>
                      );
                    }))}
              </Accordion>
            </Segment>
          </Grid.Row>

          {/* Partitioned by Tags */}
          <Grid.Row columns={1}>
            <Segment
              className="semi-transparent"
              style={{ width: "100%", minHeight: "200px" }}
            >
              <Header as="h3">文章标签</Header>

              {(!postsPartitionedByTags && <Loader active>Loading</Loader>) ||
                (postsPartitionedByTags && (
                  <List style={{ background: "none", width: "100%" }}>
                    {Object.keys(postsPartitionedByTags).map((tag) => {
                      return (
                        <List.Item
                          as={Link}
                          to={`/posts-${tagsToEnglish[tag]}`}
                          key={tag}
                          style={{ padding: "0.5em 0" }}
                        >
                          {`${tag} (${postsPartitionedByTags[tag].length})`}
                        </List.Item>
                      );
                    })}
                  </List>
                ))}
            </Segment>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    );
  }
}

export default SideBar;
