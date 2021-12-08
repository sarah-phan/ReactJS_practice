import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const { listProduct } = this.props;
    return listProduct.map((product) => {
      // có bao nhiêu item trong array thì sẽ có bấy nhiêu component sản phẩm (3 item => 3 <SanPham/>)
      return <SanPham 
      key={product.maSP} 
      product={product} 
      // Trả data về index
      detailProduct={this.props.detailProduct}
      addCart={this.props.addCart}
      />
    })
  }
  render() {
    // console.log(this.props.listProduct);
    return (
      <div className="container">
        <div className="row">
          {this.renderListProduct()}
        </div>
      </div>
    );
  }
}
