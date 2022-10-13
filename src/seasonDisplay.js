import React from "react";
import video1 from "./pexels-koolshooters-8533112.mp4";
import video2 from "./pexels-ron-lach-7354255.mp4"

const getSeason = (lat) =>{
    if (lat < 53.49013327966139){
        return "true";
    }
      else{
        return "false";
      }
    };

const videoConfig = {
    true:{
        videoS: video2,
    },
    flase:{
        videoS: video1
    }
}



const SeasonDisplay = (props) => {
    const season = getSeason(props.lat);
    const {videoS} = videoConfig[season];
    
    return(<div className="row"> 
        <video autoPlay loop className="background-vid" width="100%" >
            <source src ={videoS} type = "video/mp4"/>
        </video>
        
    </div>)
};

export default SeasonDisplay;