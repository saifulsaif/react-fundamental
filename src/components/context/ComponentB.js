import React, { Component } from 'react'
import { UserConsumer } from './userContext'



class ComponentB extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                        return <div>Hello { userName }</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentB
