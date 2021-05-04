import React from 'react';


export default function  Greetings (props) {
  if (props.lang === 'de') {
    return <p> Hallo {props.children} </p>;
  }
  if (props.lang === 'en') {
    return <p> Hello {props.children} </p>;
  }
  if (props.lang === 'fr') {
    return <p>Bonjour {props.children} </p>;
  } else {
    return <p> Cao {props.children} </p>;
  }
}
