import React from "react";
import photos from '../photos.png';

export default function Main() {
    return(
        <main className="main">
            <img src={photos} className="img"></img>
            <h1 className="heading2">Online Experiences</h1>
            <p>Join unique interactive activites led by<br/> one-of-a-kind-hosts-all without leaving<br /> home</p>
        </main>
    )
}