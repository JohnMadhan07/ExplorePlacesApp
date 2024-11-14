import React from "react";
import UsersList from "../components/UsersList";
import steveImage from "../../steve.jpg"
const Users = () => {
  const Users = [
    {
      id: "u1",
      name: "Madhan",
      image:
        steveImage,
      placeCount: 3,
    },
    {
      id: "u2",
      name: "Annie",
      image:
        steveImage,
      placeCount: 2,
    } 
  ];

  return <UsersList items={Users} />;
};
export default Users;
