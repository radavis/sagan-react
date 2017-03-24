import React from 'react'

let Category = ({categoryId, name, onClickHandler}) => (
  <div
    onClick={onClickHandler}
    data-id={categoryId}>
    {name}
  </div>
)

export default Category
