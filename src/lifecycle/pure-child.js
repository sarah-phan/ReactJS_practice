import React, { PureComponent } from 'react'

// Pure Component giúp cho khi setState sẽ không bị làm mới theo cha là index

export default class PureChild extends PureComponent {
    render() {
        console.log("Pure Child")
        return (
            <div>
                <h2>PureChild</h2>
            </div>
        )
    }
}
