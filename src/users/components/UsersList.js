import React from "react";
import UsersItem from "./UsersItem";
import { Typography } from "@mui/material";

// import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  console.log(props.items);
  if (props.items.length === 0) {
    return <Typography variant="h6">No Users found.</Typography>;
  }
  return (
    <>
      {props.items.map((user) => (
        <UsersItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.placeCount}
        />
      ))}
    </>
  );
};

export default UsersList;
