import React, { Component } from "react";
import User from "./User.js";
import Button from "@material-ui/core/Button";

class UserList extends Component {
  state = { filterGames: true, isDisabled: true, showGames: false };

  //tes

  showGames = () => {
    this.setState(() => ({ showGames: !this.state.showGames }));
  };

  toggleGames = () => {
    this.setState(() => ({
      filterGames: !this.state.filterGames
    }));
  };

  isDisabled = () => {
    const isDisabled = this.props.users.length > 0;
    return !isDisabled ? true : false;
  };

  render() {
    return (
      <div>
        <h1>Users:</h1>{" "}
        <Button disabled={this.isDisabled()} onClick={this.toggleGames}>
          Show Games
        </Button>
        <Button disabled={this.isDisabled()} onClick={this.showGames}>
          Show List
        </Button>
        {!this.state.showGames ? (
          <ol>
            <User users={this.props.users} showGames={this.state.filterGames} />
          </ol>
        ) : null}
      </div>
    );
  }
}

export default UserList;
