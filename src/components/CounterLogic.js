import React, { Component } from 'react'

class CounterLogic extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            count : 0
        }
    }


    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 2
            }
        })
    }


    render() {
        return (
            <div>
                { this.props.render(this.state.count, this.incrementCount) }
            </div>
        )
    }
}

export default CounterLogic
