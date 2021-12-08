import React, { Component } from 'react'
import Child from './child';
import ChildFunction from './childFunction';
import ChildrenComponent from './children';

export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state = {
            // username: "Cybersoft",
            username: "Cybersoft",
            age: 4,
        }
    }

    renderChange = () => {
        
        this.setState(
            {
                username: "Ngọc",
                age: 4,
            }
        )
    }

    // Hàm chứa giá trị nhận lại được từ child
    reset = (username, age) => {
        // username, age có thể đặt khác tên
        console.log(username, age);
        this.setState({
            username,
            age,
        })
    }

    render() {
        const {username, age} = this.state
        return (
            <div>
                <h2>Communication</h2>
                <p>Username: {username} - Age: {age}</p>
                <button className="btn btn-info" onClick={this.renderChange}>Change Info</button>
                <hr/>
                {/* username bên trái là props (có thể thay tên) bên fai là giá trị truyền vào */}
                {/* props dùng để truyền dữ liệu từ cha sang con */}
                {/* Cha dùng state, child dùng props */}
                {/* muốn truyền từ child sang cha thì tạo 1 props mang giá trị là hàm */}
                <Child username={username} age={age} resetInfo={this.reset}/>
                <hr/>
                <ChildFunction username={username} age={age}/>
                <hr/>
                {/* truyền thẻ p vào file children */}
                {/* username, age lấy từ state */}
                <ChildrenComponent>
                    <p>Username: {username} - Age: {age}</p>
                    <div>Nguyen</div>
                    <h3>Hello</h3>
                </ChildrenComponent>
            </div>
        )
    }
}
