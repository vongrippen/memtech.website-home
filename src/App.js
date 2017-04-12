import React, { Component } from 'react';
import Member from './Member';
import request from 'superagent'

function getUsers (callback) {
  let url = `//memtech.website/api/users.json`;

  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        callback(JSON.parse(resp.text));
      }
    })
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount () {
    getUsers((users) => {
      this.setState({users})
    })
  }
  render() {
    return (
      <div className="memtech-members">
        <ul>
          {this.state.users.map((user, index) => (
            <Member {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
