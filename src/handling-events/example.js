import React, { Component } from 'react'

export default class ExampleHandlingEvents extends Component {
    // nếu ko dùng arrow function
    // constructor(props){
    //     super(props);
    //     this.handleLogin = this.handleLogin.bind(this);
    // }
    
    username = "Sarah";
    isLogin = false;

    handleLogin = () => {
        console.log(this.isLogin);
        this.isLogin = true;
        console.log(this.isLogin);
    }

    renderHTML() {
        // if(this.isLogin){
        //     return(
        //         <div>
        //             <h1>Hello {this.username}</h1>
        //             <button className="btn btn-danger">Logout</button>
        //         </div>
        //     );
        // }
        // else{
        //     return(
        //         <div>
        //             <h1>Vui lòng login</h1>
        //             <button className="btn btn-success">Login</button>
        //         </div>
        //     );
        // }

        return this.isLogin
            ?
            (
                <div>
                    <h1>Hello {this.username}</h1>
                    <button className="btn btn-danger">Logout</button>
                </div>
            )
            :
            (
                <div>
                    <h1>Vui lòng login</h1>
                    <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                </div>
            );
    }

    render() {
        return (
            <div>
                <h3>Example Handling Events</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
