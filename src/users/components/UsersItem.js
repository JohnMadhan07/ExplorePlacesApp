import React from "react";

const UsersItem = (props) => {
  return (
    <li>
      <div>
        <div>
          <h2>{props.name}</h2>
        </div>
        <div>
          <h2>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </h2>
        </div>
        <div>
          <img src={props.name} alt="Steve Jobs"></img>
        </div>
      </div>
    </li>
  );
};
export default UsersItem;
