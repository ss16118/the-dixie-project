import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ListWithPagination from "../components/listWithPagination";
import { Loader } from "semantic-ui-react";

class SearchResultsPage extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
    };
  }

  getPostsWithSearchValue = (searchValue) => {
    let results = [];
    const { posts } = this.state;
    posts.forEach((post) => {
      const title = post["Title"][0];
      const content = post["Content"][0];
      if (title.includes(searchValue) || content.includes(searchValue)) {
        results.push(post);
      }
    });
    return results;
  };

  render() {
    const { posts } = this.state;
    let searchResults = null;
    let decodedValue = "";
    if (posts) {
      const searchValue = this.props.match.params.value;
      decodedValue = new Buffer(searchValue, "hex").toString();
      searchResults = this.getPostsWithSearchValue(decodedValue);
    }
    return (
      <React.Fragment>
        {(!searchResults && <Loader active>Loading</Loader>) ||
          (searchResults && (
            <ListWithPagination
              title={`搜索结果: ${decodedValue} (${searchResults.length})`}
              posts={searchResults}
              itemsPerPage={25}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default withRouter(SearchResultsPage);
