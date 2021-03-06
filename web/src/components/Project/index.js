import React from 'react'

export default function Project(props) {

  return(
      <div>
          <img src={props.icon} alt={props.name+" icon"} className="project__icon" />
          <h2 className="project__title" >{props.name}</h2>
          <p className="project__blurb" >{props.blurb}</p>
      </div>
  );
}
