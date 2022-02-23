import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberChild: 5,
            username: "CyberSoft",
        };
        this.interval = null;
    }
    //life cycle nhận props từ index truyền qua có sự thay đổi
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log("UNSAFE_componentWillReceiveProps", nextProps)
    // }

    // Khi xài cái này ko được xài chung componentWillReceiveProps
    // fai có return null và index fai truyền giá trị
    // current state là dữ liệu của state
    static getDerivedStateFromProps(nextProps, currentState){
        console.log("getDerivedStateFromProps", nextProps, currentState)
        if (nextProps.number === currentState.numberChild){
            return{
                username: "Ngoc",
            }
        }
        return null;
    }

    // willunmount + index giúp hủy component nhưng 
    // dù có hủy bên index thì vẫn chạy  một vài cái khác(chứng minh componentdidmount), nên willunmount giúp cho hủy hoàn toàn
    componentDidMount(){
        this.interval = setInterval(() => {
            console.log("hello");
        }, 1000);
    }

  
    componentWillUnmount(){
        console.log("componentWillUnmount")
        clearInterval(this.interval);
    }

    render() {
        console.log("Child")
        return (
            <div>
                <h2>Child</h2>
                <p>
                    Username: {this.state.username} -numberChild: {" "}
                    {this.state.username}
                </p>
            </div>
        )
    }
}
