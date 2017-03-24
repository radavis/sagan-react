import React from 'react'
import Category from './Category'

let Categories = ({categories, onClickHandler}) => {
  let result = categories.map((category) => (
    <Category
      name={category.name}
      onClickHandler={onClickHandler} />
  ))

  return <div>{result}</div>
}

export default Categories
