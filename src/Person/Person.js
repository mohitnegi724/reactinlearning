import React from 'react';
import './Person.css';

//Functional Component
const Person = (props)=>{
    return (
        <div className="Person">
            <h3 onClick={props.click}>{props.name}</h3>
            <p>{props.age}</p>
            <input onChange={props.changed}/>
        </div>
    )
}

export default Person;