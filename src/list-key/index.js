import React, { Component } from 'react'

export default class ListKey extends Component {
    constructor(props){
        super(props);
        this.state = {
            listUser: 
            [
                {username: "Sarah", age: 20},
                {username: "Sally", age: 21},
                {username: "Margaret", age: 22},
            ],
        };
    }

    renderListUser = () => {
        // cần return ngay chỗ map để có mảng mới
        return this.state.listUser.map((user, index) => {
            return(
                <li key={index}>
                    username: {user.username} - age: {user.age}
                </li>
            );
        });
    };

    render() {
        return (
            <div>
                <h3>ListKeys</h3>
                <ul>
                    {
                        this.renderListUser()
                        // // map tạo ra mảng mới, có bao nhiêu component thì tạo bấy nhiêu li
                        // this.state.listUser.map((user, index) =>{
                        //     return (
                        //         // react cần mỗi li có 1 cái key khác nhau
                        //         <li key={index}>
                        //             username: {user.username} - age: {user.age}
                        //         </li>
                        //     )
                        // })
                    }
                </ul>
            </div>
        )
    }
}
