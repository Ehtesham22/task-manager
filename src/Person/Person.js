import React from "react";
import './Person.css'
const person = (props)=>{

    return(
        <div className = 'Person'>
            <p onClick={props.Click}>i'm {props.name} and i am {props.age} years old! what about you</p>
            <p>{props.childrevn}</p>
            <input type = 'text' onChange = {props.changed} value={props.name}/>
        </div>
    )
};

export default person; 