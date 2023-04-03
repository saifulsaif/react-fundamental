import React from 'react'

function ChildConpoment(props) {
    return (
        <div>
            <button onClick={ () => props.greetHandler('child saif') }  >Greet Parent</button>
        </div>
    )
}

export default ChildConpoment
