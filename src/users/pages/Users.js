import React from "react";
import UsersList from "../components/UsersList";
import steveImage from "../../steve.jpg"
const Users = () => {
  const Users = [
    {
      id: "1",
      name: "Madhan",
      image:
        steveImage,
      placeCount: 3,
    },
  ];

  return <UsersList items={Users} />;
};
export default Users;
