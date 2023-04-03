import React, { Component } from 'react'
import ChildConpoment from './ChildConpoment';

export class ParentComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent( chaildName ) {
        alert(`hello ${this.state.parentName} from ${chaildName}`);
    }

    render() {
        return (
            <div>
                <ChildConpoment  greetHandler={ this.greetParent } />
            </div>
        )
    }
}

export default ParentComponent
