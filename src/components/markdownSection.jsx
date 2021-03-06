import React, { Component } from "react";
import ReactMarkdown from "react-markdown/with-html";
import CodeBlock from "./CodeBlock";

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  return React.createElement("h" + props.level, { id: text }, props.children);
}

class MarkdownSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: props.lang,
      markdownText: null,
      filePath: props.filePath,
    };
  }

  async loadMarkdown() {
    await fetch(this.state.filePath)
      .then((response) => response.text())
      .then((text) => this.setState({ markdownText: text }));
  }

  UNSAFE_componentWillMount() {
    this.loadMarkdown();
  }
  render() {
    return (
      <div>
        <ReactMarkdown
          escapeHtml={false}
          source={this.state.markdownText}
          renderers={{ code: CodeBlock, heading: HeadingRenderer }}
        />
      </div>
    );
  }
}
export default MarkdownSection;
