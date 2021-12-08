import React, { Component } from 'react'

export default class Child extends Component {
    handleResetInfo = () => {
        console.log("reset");
        const username = "Cybersoft";
        const age = 4;
        // vì bên father truyền bằng hàm nên fai gọi bằng hàm
        this.props.resetInfo(username, age);
    }
    render() {
        // truyền theo tên props (đúng tên)
        // const propsUsername = this.props.username;
        // console.log(propsUsername);

        // viết theo kiểu bóc tách dữ liệu  
        console.log(this.props);      
        const {username} = this.props;
        const {age} = this.props;
        return (
            <div>
                <h3>Child Component</h3>
                <p>Username: {username} - Age: {age}</p>

                <button className="btn btn-danger" onClick={this.handleResetInfo}>
                    Reset Info
                </button>
            </div>
        )
    }
}
