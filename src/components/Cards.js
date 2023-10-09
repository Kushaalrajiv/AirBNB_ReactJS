import React from "react";
import Star1 from "../Star1.png";

let text
export default function Cards(props) {
    if(props.item.openSpots==0){
        text="SOLD OUT"
    }
    else{
        text="OPEN"
    }
    return(
        <div className="container">
            <div className="avail">{text}</div>
            <img src={props.item.img} width="176px" height="235px" className="image" alt="error"/>
            
            <div className="info">
            <img src={Star1} width="14px" height="14px"/>
            <span>{props.item.rating}</span>
            <span className="grey">({props.item.reviews}) {props.item.country}</span>
            </div>
            <span className="review">{props.item.lesson}</span>
            <span><strong>From ${props.item.price}</strong> / person</span>
        </div>
    )
}
