import { trim } from "jquery";
import React, { Component } from "react";

// onblur dùng để check nếu ng dùng nhấp vào ô và bấm bên ngoài nhưng chưa có input j => error

export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                manv: "",
                tennv: "",
                email: "",
            },
            error: {
                manv: "",
                tennv: "",
                email: "",
            },
            // xét cho từng trường và khi tất cả là true thì formValid là true
            //  đầu vô là chưa có gì nên chưa thỏa điều kiện -> false
            formValid: false,
            manvValid: false,
            tennvValid: false,
            emailValid: false,
        }
    }

    handleOnChange = (event) => {
        // bóc tách name và target
        const { name, value } = event.target;
        // console.log(name, value);
        // Do từ state xuống value mới tới các giá trị
        // Before là thẳng state
        this.setState({
            // Bảo toàn các value cũ và cập nhật giá trị thay đổi
            value: { ...this.state.value, [name]: value }
        })
    }

    handleError = (event) => {
        // dùng event.target để dom tới ô người dùng đang ở
        const { name, value } = event.target
        // console.log(name,value);
        // let mess = "";
        // if (value.trim() === ""){
        //     // trường hợp báo lỗi
        //     mess = `Vui lòng nhập, ${name} Không được để trống`;
        // }
        // else{
        //     mess = "";
        // }
        let mess = value.trim() === "" ? `Vui lòng nhập ${name}` : ""
        
        let { manvValid, tennvValid, emailValid } = this.state
        // fai xác định đang ở đúng ô
        switch (name){
            case "manv":
                manvValid = mess === "" ? true : false;
                // nếu có tồn tại nhập vào và thỏa điều kiện (xét điều kiện sai)
                if (value && value.length <= 4){
                    // cập nhật lại manvValid thành false
                    manvValid = false;
                    mess = "Độ dài ký tự phải từ 5 trở lên"
                } 
                break;
            case "tennv":
                tennvValid = mess === "" ? true : false;
                
                break;
            case "email":
                emailValid = mess === "" ? true : false;
                if (value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")){
                    manvValid = false;
                    mess = "Email không hợp lệ"
                }
                break;
            default:
                break;
        }

        // console.log(mess);
        this.setState({
            error: { ...this.state.error, [name]: mess },
            manvValid,
            tennvValid,
            emailValid,
            formValid: manvValid && tennvValid && emailValid
        }, () => {
            console.log(this.state);
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">*FormValidation</h3>
                <form>
                    <div className="form-group">
                        <label>Mã nhân viên</label>
                        <input
                            type="text"
                            className="form-control"
                            name="manv"
                            onChange={this.handleOnChange}
                            onBlur={this.handleError}
                        />
                        {/* vì manv ko rỗng => false => 0 (0 && 1 = 0) */}
                        {this.state.error.manv && <div className="alert alert-danger">{this.state.error.manv}</div>}
                    </div>
                    <div className="form-group">
                        <label>Tên nhân viên</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tennv"
                            onChange={this.handleOnChange}
                            onBlur={this.handleError}
                        />
                        {this.state.error.tennv && <div className="alert alert-danger">{this.state.error.tennv}</div>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.handleOnChange}
                            onBlur={this.handleError}
                        />
                        {this.state.error.email && <div className="alert alert-danger">{this.state.error.email}</div>}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success"
                        // !false = true vì muốn disable thì fai là disable: true
                        disabled={!this.state.formValid}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}