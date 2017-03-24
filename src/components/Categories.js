import React from 'react'
import Category from './Category'

let Categories = ({categories, onClickHandler}) => {
  let result = categories.map((category) => (
    <Category
      key={`category-${category.id}`}
      name={category.name}
      onClickHandler={onClickHandler}
      categoryId={category.id} />
  ))

  return <div>{result}</div>
}

export default Categories
