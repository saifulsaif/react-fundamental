import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
    render() {
        return (
            <div>
                <h1>hi</h1>
                 <ComponentB />
            </div>
        )
    }
}

export default ComponentA
