import React, { Component } from 'react'

class ClickCounter extends Component {


    render() {

        const { count, incrementCount } = this.props
        return <button onClick={incrementCount} >Click New {count} times</button>
    }
}

export default ClickCounter
