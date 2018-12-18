import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

class AppUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        lastName: "",
        userName: ""
      },
      userExists: false
    };

    this.baseState = this.state;
  }

  clearState = () => {
    this.setState(this.baseState);
  };

  // isUserExists = user => {
  //   const usersList = this.props.users;
  //   const res = usersList.forEach(usr => {
  //     if (usr.userName === user.userName) return true;
  //   });
  //   console.log(res);
  //   return res;
  // };
  // contactExists = currUsername => {
  //     const users = this.props.users;
  //     console.log(users);
  //     for (let user of users) {
  //       console.log(user.username + currUsername);
  //       if (user.username === currUsername) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   };

  //   isDisabled = () => {
  //     const { name, lastName, userName } = this.state.user;
  //     // return nam
  //   e === "" || lastName === "" || userName === "";
  //     return name === "" || lastName === "" || userName === "" ? true : false;
  //   };

  //   handleSubmit = event => {
  //     event.preventDefault();

  //     let userExists = this.contactExists(this.state.user.userName);
  //     console.log(userExists);
  //     if (!userExists) {
  //       this.props.onAddUsers(this.state.user);
  //     }

  //     this.setState(() => ({
  //       userExists
  //     }));
  //   };

  //   handleInputChange = event => {
  //     const { name, value } = event.target;

  //     this.setState(currState => ({
  //       ...currState,
  //       user: {
  //         ...currState.user,
  //         [name]: value
  //       }
  //     }));
  //   };

  contactExists = currUsername => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };

  handleSubmit = event => {
    event.preventDefault();
    const userExists = this.contactExists(this.state.user.username);

    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }

    this.setState(() => ({
      userExists
    }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name + " " + value);
    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value
      }
    }));
  };

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === "" || lastName === "" || username === "";
  };

  render() {
    const { name, lastName, userName } = this.state.user;
    return (
      <div>
        <h2>Add a New User</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            name="userName"
            placeholder="User Name"
            value={userName}
            onChange={this.handleInputChange}
          />

          {/* Since disable only allows true or false you need call the function with parenthesis */}
          <Button disabled={false} type="reset" onClick={this.clearState}>
            Clear
          </Button>
          <Button disabled={this.isDisabled()} type="submit">
            Add
          </Button>
        </form>
        {this.state.userExists ? (
          <p className="error">You cannot add a user that already exists.</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

AppUser.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string
};

export default AppUser;
