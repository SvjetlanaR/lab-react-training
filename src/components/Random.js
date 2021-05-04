import React from 'react';

export default function Random(props) {
    let result = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return (
     <p>Random value between {props.min} and {props.max} =&gt; {result}</p>
    )
}

