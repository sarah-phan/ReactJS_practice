import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      listUser: data,
      keyword: "",
      userEdit: null,
    };
  }

  _isExist = (id)=>{
    return this.state.listUser.findIndex((item) => {
      return item.id === id;
    });
  }

  handleDelete = (user) => {
    // console.log(user);
    const index = this._isExist(user.id);
    console.log(index);
    if (index !== -1){
      let listUser = [...this.state.listUser];
      listUser.splice(index,1);
      this.setState({
        listUser,
      })
    }
  }

  handleSubmit = (user) => {
    let listUser = [...this.state.listUser];
    
    // user.id = new Date().getTime();
    // Do có khả năng id bị trùng => lỗi nên clone lại user cũ cho userNew và thêm tự thêm id
    const userNew = {...user, id: new Date().getTime()};
    
    listUser.push(userNew);
    // console.log(user);
    
    this.setState({
      listUser,
    }, () => {
      console.log(listUser);
    })
  }

  handleSearch = (keyword) => {
    // console.log(keyword);
    this.setState({
      keyword,
    });
  }

  handleEdit = (user) => {
    this.setState ({
      userEdit: user,
    });
  }

  render() {
    let {listUser, keyword} = this.state;
    listUser = this.state.listUser.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    console.log(listUser)
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search searchValue={this.handleSearch}/>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users 
        // listUser = {this.state.listUser}
        // vì sau render thì vẫn có data cũ, sau khi search (lấy value) thì mới hiện ra kết quả search, xóa value thì vẫn trả về data cũ và hiện cũ
        listUser = {listUser}
        deleteUser = {this.handleDelete}
        getUserEdit = {this.handleEdit}
        />
        <Modal 
        getUserSubmit={this.handleSubmit}
        userEditModal= {this.state.userEdit}
        />
      </div>
    );
  }
}

export default Home;
