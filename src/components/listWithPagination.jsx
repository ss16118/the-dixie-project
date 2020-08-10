import React, { Component } from "react";
import { List, Loader, Header, Label, Pagination } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import tagsToEnglish from "../data/tagsInEnglish.json";

class ListWithPagination extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      posts: props.posts,
      itemsPerPage: props.itemsPerPage,
      currentPage: 0,
    };
    this.pages = null;
  }

  dividePages() {
    this.pages = [];
    const { posts } = this.state;
    const { itemsPerPage } = this.state;
    if (posts) {
      for (let i = 0; i < Math.ceil(posts.length / itemsPerPage); i++) {
        this.pages.push(posts.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
      }
    }
  }

  handlePageChange = (event, data) => {
    this.setState({ currentPage: data.activePage - 1 });
  };

  render() {
    const { posts } = this.state;
    if (!this.pages && posts) {
      this.dividePages();
    }
    const { currentPage } = this.state;
    const pages = this.pages;

    return (
      <React.Fragment>
        {(!posts && <Loader active>Loading</Loader>) ||
          (posts && (
            <React.Fragment>
              <Header as="h2">{this.state.title}</Header>
              <List
                divided
                style={{
                  background: "none",
                  width: "100%",
                  margin: "2em 1em 2em 0",
                }}
              >
                {pages[currentPage].map((post) => {
                  const title = post["Title"][0];
                  const slug = new Buffer(title + post["LogDate"][0]).toString(
                    "hex"
                  );
                  return (
                    <List.Item key={post["Title"][0] + post["LogDate"][0]}>
                      <List.Content>
                        <List.Header
                          className="post-link"
                          as={Link}
                          to={`/${slug}`}
                          style={{
                            margin: "0.5em 0",
                            paddingTop: "0.5em",
                            paddingBottom: "0.5em",
                            color: "black",
                            fontSize: "15px",
                          }}
                        >
                          {post["Title"][0]}
                        </List.Header>
                        <List.Description>
                          {post["LogDate"][0]}
                          {post["Tags"][0].split(" ").map((tag) => {
                            tag = tag === "" ? "无标签" : tag;
                            return (
                              <Label
                                as={Link}
                                to={`/posts-${tagsToEnglish[tag]}`}
                                className="label-list"
                                key={tag}
                                size="mini"
                                color={"blue"}
                                style={{ marginLeft: "0.5em" }}
                              >
                                {tag}
                              </Label>
                            );
                          })}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>

              {posts.length > this.state.itemsPerPage && (
                <React.Fragment>
                  <MediaQuery maxDeviceWidth={1224}>
                    <Pagination
                      className="centered-pagination"
                      ellipsisItem={null}
                      boundaryRange={0}
                      siblingRange={1}
                      defaultActivePage={currentPage + 1}
                      totalPages={Math.ceil(
                        posts.length / this.state.itemsPerPage
                      )}
                      onPageChange={this.handlePageChange}
                    />
                  </MediaQuery>
                  <MediaQuery minDeviceWidth={1224}>
                    <Pagination
                      className="centered-pagination"
                      defaultActivePage={currentPage + 1}
                      totalPages={Math.ceil(
                        posts.length / this.state.itemsPerPage
                      )}
                      onPageChange={this.handlePageChange}
                    />
                  </MediaQuery>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  }
}

export default ListWithPagination;
