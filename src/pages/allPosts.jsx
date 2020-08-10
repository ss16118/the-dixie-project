import React, { Component } from "react";
import ListWithPagination from "../components/listWithPagination";

class AllPosts extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
    };
  }
  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <ListWithPagination
          key={posts === null}
          title="博文目录"
          posts={posts}
          itemsPerPage={25}
        />
      </React.Fragment>
    );
  }
}

export default AllPosts;
