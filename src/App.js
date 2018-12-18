import React, { Component } from "react";
import "./App.css";
import AddUser from "./AddUser.js";
import UserList from "./UserList.js";

class App extends Component {
  state = {
    users: []
  };

  createContact = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({
      users: [...currState.users, user]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">User Screen Sample</header>
        <AddUser users={this.state.users} onAddUser={this.createContact} />
        <UserList users={this.state.users} />
        {console.log(this.state.users)}
      </div>
    );
  }
}

export default App;
