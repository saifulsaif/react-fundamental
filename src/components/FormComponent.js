import React, { Component } from 'react'

export class FormComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }



    handleUserNameChhange = (event) => {
        this.setState({
            username: event.target.value
        })
    }



    render() {
        return (
            <div>
                <form>
                    <label>User NAme</label>
                    <input type="text" value={this.state.username} onChange={ this.handleUserNameChhange } />
                </form>
            </div>
        )
    }
}

export default FormComponent
