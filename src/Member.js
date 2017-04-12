import React, { Component } from 'react';

class Member extends Component {
  render() {
    return (
      <li className="memtech-member">
        <a href={"https://memtech.website/~" + this.props.username}>{this.props.username}</a>
      </li>
    );
  }
}

export default Member;
