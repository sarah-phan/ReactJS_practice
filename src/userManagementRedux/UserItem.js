import React, { Component } from "react";
import { connect } from "react-redux";
import {actDeleteUser, actEditUser} from "./../redux/actions"

class UserItem extends Component {
  render() {
    const {user} = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button 
          className="btn btn-danger" 
          onClick={() => {
            // console.log(user);
            this.props.deleteUser(user)
          }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

//  View dispatch lên action và nhập dữ liệu cho userReducer
const mapDispatchToProps = (dispatch) => {
  return{
    // deleteUser: (user) => {
    //   // gọi action bên userReducer để thực hiện nững dòng code xóa
    //   const action = {
    //     type: "DELETE_USER",
    //     payload: user,
    //   };

    //  // đưa lên reducer
    // dispatch(action);
    // },

    // editUser: (user) => {
    //   const action = {
    //     type: "EDIT_USER",
    //     payload: user,
    //   };
    //   dispatch(action);
    // },

    deleteUser: (user) => {
      dispatch(actDeleteUser(user));
    },

    editUser: (user) => {
      dispatch(actEditUser(user));
    }

  };
};

export default connect(null, mapDispatchToProps)(UserItem);
