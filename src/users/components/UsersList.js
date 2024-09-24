import React from "react";
import UsersItem from "./UsersItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h2>No Users found.</h2>;
  }
  return (
    <ul>
      {props.items.map((user) => {
        <UsersItem key={user.id}
        id={user.id}
        name={user.name}
        image={user.image}
        placeCount={user.places}/>;
      })}
    </ul>
  );
};
export default UsersList;
