import React, { Component } from "react";
import ContentLoader from "./components/contentLoader";
import "./App.css";
import { Grid, Segment } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import SiteHeader from "./components/header";
import SideBar from "./components/sidebar";
import Home from "./pages/home";
import AllPosts from "./pages/allPosts";
import ListWithPagination from "./components/listWithPagination";
import tagsToEnglish from "./data/tagsInEnglish.json";
import PostSection from "./components/postSection";
import SearchResultsPage from "./pages/searchResults";

const parseString = require("xml2js").parseString;

const itemsPerPage = 25;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: null,
      postsPartitionedByDate: null,
      postsPartitionedByTags: null,
    };
  }

  componentDidMount() {
    const loader = new ContentLoader(process.env.PUBLIC_URL + "/howe-blog.xml");
    const promise = new Promise(function (resolve, reject) {
      const content = loader.loadBlog();
      resolve(content);
    });
    promise.then(
      (content) => {
        parseString(content, (err, blog) => {
          blog = blog["BlogBusCom"];
          this.setState({
            allPosts: blog["Log"],
          });
          this.setState({
            postsPartitionedByDate: loader.partitionPostsByDate(blog["Log"]),
          });
          this.setState({
            postsPartitionedByTags: loader.partitionPostsByTags(blog["Log"]),
          });
        });
      },
      (error) => console.log(error)
    );
  }

  render() {
    const { postsPartitionedByDate } = this.state;
    const { postsPartitionedByTags } = this.state;
    const { allPosts } = this.state;
    return (
      <React.Fragment>
        <div className="image-container">
          <img
            className="center-fit"
            alt="background"
            src={process.env.PUBLIC_URL + "/images/background.jpg"}
          />
        </div>
        <Grid>
          <SiteHeader />
          <Grid.Row columns={2} style={{ margin: "0 10em" }}>
            <SideBar
              key={
                (postsPartitionedByDate === null) +
                (postsPartitionedByTags === null)
              }
              postsPartitionedByDate={postsPartitionedByDate}
              postsPartitionedByTags={postsPartitionedByTags}
            />
            <Grid.Column style={{ padding: "0 0 0 1em" }} width={12}>
              <Segment
                className="semi-transparent"
                style={{
                  padding: "2em",
                  minHeight: "200px",
                }}
              >
                <Switch>
                  <Route
                    path="/"
                    exact
                    component={() => (
                      <Home key={allPosts === null} posts={allPosts} />
                    )}
                  />
                  <Route
                    path="/all-posts"
                    exact
                    component={() => (
                      <AllPosts key={allPosts === null} posts={allPosts} />
                    )}
                  />
                  {postsPartitionedByDate &&
                    Object.keys(postsPartitionedByDate).map((year) => {
                      const yearLinks = Object.keys(
                        postsPartitionedByDate[year]
                      ).map((month) => {
                        return (
                          <Route
                            key={`${year}${month}`}
                            path={`/posts-${year}-${month}`}
                            exact
                            component={() => (
                              <ListWithPagination
                                title={`${year}年${month}月`}
                                posts={postsPartitionedByDate[year][month]}
                                itemsPerPage={itemsPerPage}
                              />
                            )}
                          />
                        );
                      });
                      return yearLinks;
                    })}
                  {postsPartitionedByTags &&
                    Object.keys(postsPartitionedByTags).map((tag) => {
                      return (
                        <Route
                          key={tag}
                          path={`/posts-${tagsToEnglish[tag]}`}
                          exact
                          component={() => (
                            <ListWithPagination
                              title={`标签：${tag}`}
                              posts={postsPartitionedByTags[tag]}
                              itemsPerPage={itemsPerPage}
                            />
                          )}
                        />
                      );
                    })}

                  {allPosts &&
                    allPosts.map((post) => {
                      const title = post["Title"][0];
                      const slug = new Buffer(
                        title + post["LogDate"][0]
                      ).toString("hex");
                      return (
                        <Route
                          key={slug}
                          path={`/${slug}`}
                          exact
                          component={() => <PostSection post={post} />}
                        />
                      );
                    })}
                  <Route
                    path="/search/:value"
                    children={() => (
                      <SearchResultsPage
                        key={allPosts === null}
                        posts={allPosts}
                      />
                    )}
                  />
                </Switch>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
