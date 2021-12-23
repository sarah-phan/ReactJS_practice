import React, { Component } from "react";
import { connect } from "react-redux";
import {actGetKeyword} from "./../redux/actions"

class Search extends Component {
  handleOnChange = (event) => {
    const {value} = event.target;
    // console.log(value);
    this.props.keyword(value);
  }
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleOnChange}/>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    keyword: (key) => {
      dispatch(actGetKeyword(key));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
