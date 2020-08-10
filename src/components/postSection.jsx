import React, { Component } from "react";
import { Button, Container, Header, Comment, Segment } from "semantic-ui-react";

class PostSection extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      post: props.post,
    };
  }

  parseDate = (date) => {
    let parsedDate = date.substring(0, 4) + "年";
    parsedDate += date.substring(5, 7) + "月";
    parsedDate += date.substring(8, 10) + "日 ";
    parsedDate += date.substring(10);
    return parsedDate;
  };

  render() {
    const { post } = this.state;
    const comments = post["Comments"][0]["Comment"];
    return (
      <React.Fragment>
        <Button
          basic
          color="blue"
          icon="angle double left"
          onClick={() => window.history.go(-1)}
        />
        <Header as="h2" style={{ textAlign: "center", marginTop: "0.5em" }}>
          {post["Title"][0]}
        </Header>
        <Header
          as="h5"
          style={{ color: "gray", textAlign: "center", marginTop: "1em" }}
        >
          {this.parseDate(post["LogDate"][0])}
        </Header>
        <Container
          dangerouslySetInnerHTML={{ __html: post["Content"][0] }}
        ></Container>
        {comments && (
          <Segment style={{ marginTop: "2em", background: "none" }}>
            <Comment.Group>
              <Header as="h3" dividing>
                评论
              </Header>
              {comments.map((comment) => {
                return (
                  <Comment
                    key={comment["NiceName"][0] + comment["CreateTime"][0]}
                    style={{ padding: "0.5em" }}
                  >
                    <Comment.Content>
                      <Comment.Author>{comment["NiceName"][0]}</Comment.Author>
                      <Comment.Metadata>
                        {comment["CreateTime"][0]}
                      </Comment.Metadata>
                      <Comment.Text
                        dangerouslySetInnerHTML={{
                          __html: comment["CommentText"][0],
                        }}
                      ></Comment.Text>
                    </Comment.Content>
                  </Comment>
                );
              })}
            </Comment.Group>
          </Segment>
        )}
      </React.Fragment>
    );
  }
}

export default PostSection;
