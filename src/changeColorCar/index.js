import React, { Component } from 'react'

export default class ChangeColorCar extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg",
        }
    }

    changeImage = (img) => {
        this.setState({
            // img: img
            // nếu trùng viết img,
            img,
        })
    }

    render() {
        // Destructuring
        const{img} = this.state;
        return (
            <div>
                <h3>Change Color Car</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={img}></img>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-danger" 
                            onClick={() => {this.changeImage("./img/imgRedCar.jpg")}}>
                                Red
                            </button>
                            <button className="btn btn-light mx-3" 
                            onClick={() => {this.changeImage("./img/imgSilverCar.jpg")}}>
                                Silver
                            </button>
                            <button className="btn btn-dark" 
                            onClick={() => {this.changeImage("./img/imgBlackCar.jpg")}}>
                                Dark
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
