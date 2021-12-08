import React,{Component} from "react";
// import các component con
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

// Đây là 1 component -> fai viết hoa
class Baitap1 extends Component{
    // những gì liên quan đến html thì fai viết trong return của render
    render(){
        return (
            // React bắt buộc dùng 1 thẻ nào đó bao lại các thẻ cùng cấp
            <div>
                <div>Baitap 1</div>
                <Header />
                <div className="contents">
                    <Content />
                    <Sidebar />
                </div>
                <Footer />
            </div>
        )
    }
}
export default Baitap1;
// phải import vào file App.js (src)

