import React, { Component } from "react";
import { connect } from "react-redux";
import {actOnChange} from "./../redux/actions";

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER", //vì giá trị ban đầu không được chọn, để mặc định nên fai tự thêm vào (nếu option đầu là "chọn..." thì có thể để rỗng)
    }
  }

  handleOnChange = (event) => {
    // console.log(event.target.name, event.target.value)
    const {name, value} = event.target;
    // console.log(name, value)
    this.setState({
      // [] là multi input
      [name]: value,
      // Nếu ở input fullname thì name trong ngoặc vuông được thế bằng fullname
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.getUserSubmit(this.state);

    this.props.onSubmit(this.state);
    // this.closeModal.current.click();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        fullname: nextProps.userEdit.fullname,
        username: nextProps.userEdit.username,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      //reset
      this.setState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      });
    }
  }

  render() {
    // console.log(this.props.userEditModal)
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="username"
                  // name = "..." fai giống tên với state (vs data)
                  value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="fullname"
                  value={this.state.fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="email"
                  value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="type"
                  value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select >
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSubmit: (user) => {
      dispatch(actOnChange(user));
    },
  };
};

const mapStateToProp = (state) => {
    return{
      userEdit: state.userReducer.userEdit,
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(Modal);
