import React from "react";
import UsersItem from "./UsersItem";
import { Container } from "@mui/material";

const UsersList = (props) => {
    console.log(props)
  if (props.items.length === 0) {
    return <h2>No Users found.</h2>;
  }
  return (
    <Container maxWidth="xs">
    <ul>
      {props.items.map((user) => (
        <UsersItem key={user.id}
        id={user.id}
        name={user.name}
        image={user.image}
        placeCount={user.placeCount}/>
      ))}
    </ul>
    </Container>
  );
};
export default UsersList;
