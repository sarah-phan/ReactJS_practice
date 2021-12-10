import React, { Component } from "react";

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
    this.props.getUserSubmit(this.state);
  }

  render() {
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
              <h5 className="modal-title">ADD USER</h5>
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
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="fullname"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="phoneNumber"/>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select 
                  className="form-control" 
                  onChange={this.handleOnChange}
                  name="type"
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

export default Modal;
