import React from "react";
import Card from "./card";

export default function Listcard(){
    return(
        <div className="container">
            <div className="row">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}