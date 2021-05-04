import React from 'react';

export default function IdCard(props) {
  return (
    <div>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>gender: {props.gender}</p>
      <p>height: {props.height / 100 + 'm'}</p>
      <p>birth: {props.birth.toDateString()}</p>
      <p>
        picture: <img src={props.picture}></img>
      </p>
    </div>
  );
}
