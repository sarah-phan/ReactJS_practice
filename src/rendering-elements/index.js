import React, { Component } from 'react'

export default class RenderingElement extends Component {
    username = "Cybersoft";
    age = 18;
    class = "Bootcamp 20";

    renderInfo() {
        return (
            // bỏ div để cùng cấp với h3 (phải giữ nguyên dấu)
            <>
                <p>
                    {this.username} - {this.age}
                </p>
                <p>
                    Lớp: {this.class}
                </p>
            </>
        );
    }

    render() {
        return (
            <div>
                <h3>*RenderingElement</h3>
                {this.renderInfo()}
            </div>
        )
    }
}
