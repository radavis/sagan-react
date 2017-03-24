import React from 'react'

const TextField = (props) => {
  return(
    <div>
      <label htmlFor={props.id}>
        {props.label}:
      </label>

      <input type="text"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.handler} />
    </div>
  )
}

export default TextField
