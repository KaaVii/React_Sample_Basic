import React from "react";

const User = props => {
  return (
    <div>
      {props.showGames
        ? props.users.map(user => (
            <li key={user.userName}>
              {user.userName} have played {user.numGamesPlayed} games.
            </li>
          ))
        : props.users.map(user => (
            <li key={user.userName}>{user.userName} have played * games.</li>
          ))}
    </div>
  );
};
export default User;
