import React, { Component } from 'react'
import PureChild from './pure-child';
import Child from './child';

// LifeCycle chỉ áp dụng cho class, không áp dụng cho function 
// Lifecycle là tự chạy từ trên xuống (theo thứ tự) dưới nhưng chỉ 1 lần (born to die)
export default class LifeCycle extends Component {
    // hàm khởi tạo luôn chạy ko cần gọi
    constructor(props){
        super(props);
        console.log("constructor - chạy 1 lần duy nhất");
        this.state = {
            number: 0,
            statusChild: true
        }
    }

    // ComponentWillMount là function lifecycle của react cũ nên có cảnh báo, muốn ko có cảnh báo thì thêm UNSAFE
    // Do đây là lifecycle nên ko cần gọi vẫn chạy
    UNSAFE_componentWillMount(){
        console.log("componentWillMount - chạy 1 lần duy nhất")
    }

    // Đây là funciton không tuân theo thứ tự, mà mặc định là cuối cùng (sau render)
    // Function for calling API
    componentDidMount(){
        console.log("componentDidMount - chạy 1 lần duy nhất")
    }

    // 2 thành phần update chỉ chạy khi thay đổi state
    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate - chạy 1 lần duy nhất")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate - chạy 1 lần duy nhất")
    }

    // hàm cho phép setState hay ko => true có, false ko cho update(ko có những hàm Update, render sau khi setState)
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate")
    //     return true;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextProps, nextState)
        if (nextState.number === 2){
            return false;
        }
        return true;
    }

    // render cũng là 1 lifecycle và chạy khi state thay đổi
    render() {
        console.log("render");
        return (
            <div>
                <h3>Life</h3>
                <h1>Number: {this.state.number}</h1>
                {/* thay đổi state, render chạy lại và các function update chạy */}
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        number: this.state.number + 1,
                    })
                }}>
                    Set State
                </button>
                <hr/>
                <PureChild/>
                <hr/>
                {/* <Child number={this.state.number}/> */}
                {/* Không thể hiện child ra ngoài */}
                {this.state.statusChild && <Child number={this.state.number}/>}
                <button className='btn btn-info' onClick={() => {
                    this.setState({
                        statusChild: false,
                    });
                }}
                >
                    Change Status Child
                </button>
            </div>
        )
    }
}
