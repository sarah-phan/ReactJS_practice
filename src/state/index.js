import React, { Component } from 'react'

export default class State extends Component {
    // state dùng để render được sau khi làm mới (login -> logout)
    // Nếu như state thay đổi => component render làm mới
    // state thay đổi bao nhiêu lần thì render thay đối bấy nhiêu lần (không có số cụ thể)
    constructor(props){
        super(props);
        this.state = {
            username: "Sarah",
            isLogin: false, 
        }
    }

    handleLogin = () => {
        // console.log(this.state.isLogin);
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);

        this.setState(
            {
            isLogin: true,
            },
            () => {
                console.log(this.state.isLogin)
            }
        );
        console.log(this.state.isLogin);
        // setState bị bất đồng bộ nên khi bấm Login vẫn log ra false (expect: true) nếu console bên ngoài setState => để bên trong
    };

    handleLogout = () => {
        this.setState({
            isLogin: false,
        });
    };

    renderHTML() {
        return this.state.isLogin
            ?
            (
                <div>
                    <h1>Hello {this.state.username}</h1>
                    <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
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
                <h3>State</h3>
                {/* perfomance:
                chỉ thay đổi những thẻ liên quan tới state (trong renderHTML) nên sẽ ko thay đổi luôn cả h3 */}
                {this.renderHTML()}
            </div>
        )
    }
}
