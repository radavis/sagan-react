import React from 'react'

let Category = ({name, onClickHandler}) => (
  <div onClick={onClickHandler}>
    {name}
  </div>
)

export default Category
