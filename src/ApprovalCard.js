import React from "react";

const LocationCard = (props) =>{
    return(
        <div className="ui card">
            <h1>Hello {props.name}</h1>
            <p className="WelcomeMessage">Welcome to our site, We see that you are located
            <p></p>{props.location}
            </p>
        </div>
    )
}

export default LocationCard;