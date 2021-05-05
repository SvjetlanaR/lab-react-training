import React from 'react';
import './Random.css'


export default function Random(props) {
    let result = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return (
        <div className='border'>
     <p>Random value between {props.min} and {props.max} =&gt; {result}</p>
     </div>
    )
}

