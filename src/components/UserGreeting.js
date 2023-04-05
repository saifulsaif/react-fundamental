import React, { Component } from 'react'

export class UserGreeting extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn :false
        }

    }



    render() {
        return this.state.isLoggedIn ? (
            <div>
                <h1>Welcom Saif</h1>
                <div>Welcom guest</div>
            </div>
        ) : (
            <div> hello </div>
        )
    }
}

export default UserGreeting
