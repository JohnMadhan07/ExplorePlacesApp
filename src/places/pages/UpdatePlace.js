import React from "react";
import { useParams } from "react-router-dom";
import needleImage from "../../needle.jpg";
import howthImage from "../../howth.jpg"

const UpdatePlace = ()=>{
    const placeId= useParams().placeId
    const dummy_places = [
        {
          id: "p1",
          name: "Dublin Needle",
          description: "A tall structure made of steel in the city center",
          image: needleImage,
          creator:"u1",
        },
        {
          id: "p2",
          name: "Howth CLiff",
          description: "A cliff near the East Ireland",
          image: howthImage,
          creator:"u2",
        },
        {
          id: "p2",
          name: "Howth CLiff",
          description: "A cliff near the East Ireland",
          image: howthImage,
          creator:"u2",
        }]
    const identifiedPlace= dummy_places.find(p=>p.id===placeId)
        if(!identifiedPlace){
            return(
                <div>No places Found</div>
            )
        }
    return(
        <div>Update Place</div>
    )
}
export default UpdatePlace;