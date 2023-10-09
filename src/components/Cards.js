import React from "react";
import Star1 from "../Star1.png";

let text
export default function Cards(props) {
    if(props.spots==0){
        text="SOLD OUT"
    }
    else{
        text="OPEN"
    }
    return(
        <div className="container">
            <div className="avail">{text}</div>
            <img src={props.img} width="176px" height="235px" className="image" alt="error"/>
            
            <div className="info">
            <img src={Star1} width="14px" height="14px"/>
            <span>{props.rating}</span>
            <span className="grey">({props.reviews}) {props.country}</span>
            </div>
            <span className="review">{props.lesson}</span>
            <span><strong>From ${props.price}</strong> / person</span>
        </div>
    )
}