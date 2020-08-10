import React, { Component } from "react";
import MarkdownSection from "../components/markdownSection";
import { Loader, Header, Card, Segment, Button } from "semantic-ui-react";
import Truncate from "react-truncate";

const NumOfPostsToDisplay = 10;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
    };
  }
  render() {
    const { posts } = this.state;
    let shuffled = null;
    if (posts) {
      shuffled = posts.map((x) => ({ ...x }));
      shuffled = shuffled.sort(() => 0.5 - Math.random());
    }
    return (
      <React.Fragment>
        <MarkdownSection filePath={process.env.PUBLIC_URL + "/home-intro.md"} />
        <Segment style={{ background: "none", minHeight: "200px" }}>
          <Header as="h3">博文节选</Header>
          {(!shuffled && <Loader active>Loading</Loader>) ||
            (shuffled && (
              <Card.Group itemsPerRow={1}>
                {shuffled.slice(0, NumOfPostsToDisplay).map((post) => {
                  const title = post["Title"][0];
                  const slug = new Buffer(title + post["LogDate"][0]).toString(
                    "hex"
                  );
                  return (
                    <Card
                      key={post["Title"][0] + post["LogDate"][0]}
                      style={{ background: "none" }}
                      color="blue"
                    >
                      <Card.Content>
                        <Card.Header>{post["Title"][0]}</Card.Header>
                        <Card.Meta>{post["LogDate"][0]}</Card.Meta>
                        <Card.Description>
                          <Truncate lines={3} width={1000} ellipsis="&hellip;">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post["Content"][0],
                              }}
                            ></div>
                          </Truncate>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra textAlign="right">
                        <Button
                          basic
                          color="blue"
                          onClick={() =>
                            (window.location.href = `/${process.env.PUBLIC_URL}/${slug}`)
                          }
                        >
                          阅读
                        </Button>
                      </Card.Content>
                    </Card>
                  );
                })}
              </Card.Group>
            ))}
        </Segment>
      </React.Fragment>
    );
  }
}

export default Home;
