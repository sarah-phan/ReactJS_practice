import React, { Component } from 'react'
import ExampleHandlingEvents from './example';

export default class Handlingevents extends Component {
    handlingEvents(){
        console.log(234);
    }

    handlingParams(username, age){
        console.log(username, age);
    }

    render() {
        return (
            <div>
                <h3>Handling Event</h3>
                <button className="btn btn-success" onClick={this.handlingEvents}>
                    Handling Button 234
                </button>
                <button className="btn btn-info" onClick={() => {
                    console.log(123)
                }}>
                    Handling Event 123
                </button>
                <button className="btn btn-danger" onClick={() => {this.handlingParams("Cybersoft", 18)}}>
                    Handling Event Params
                </button>

                <ExampleHandlingEvents/>
            </div>
        )
    }
}
