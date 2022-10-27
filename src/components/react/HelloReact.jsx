import React from "react";

class HelloMessage extends React.Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
}

export default HelloMessage
