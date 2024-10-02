import React from "react";
import { Box, Typography } from "@mui/material";
import {Link} from "react-router-dom";

const UsersItem = (props) => {
  return (
    <Box
      component={Link}
      to={`/user/${props.id}`}
      sx={{
        display: "flex",
        flexDirection: "row",   
        alignItems: "center",      
        justifyContent: "center", 
        textAlign: "center",
        background: "#292929",
        marginTop:"30px",    
        padding: "10px",      
        textDecoration: "none",  
        borderRadius: "10px" ,
        "&:hover": {
      background: "yellow",   
      "& h6, & p": {            
        color: "black",         
      }, 
    },            
      }}
    >
      <Box
        component="img"
        src={props.image}
        alt={props.name}
        sx={{
          width: 70,              
          height: 70,             
          borderRadius: "50%",     
          objectFit: "cover",      
          marginRight: "16px",  
           
        }}
      />
      <Box>
      <Typography variant="h6" color="White">{props.name}</Typography>
      <Typography variant="body2" color="White">
        {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
      </Typography>
      </Box>
    </Box>
  );
};

export default UsersItem;
