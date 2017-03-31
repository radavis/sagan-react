import React from 'react'
import { shallow } from 'enzyme'
import Categories from '../../components/Categories'
import Category from '../../components/Category'

describe('<Categories />', () => {
  let categories

  beforeEach(() => {
    let categoriesData = [
      { id: 66, name: '3D Printing Tips' },
      { id: 67, name: 'Arcades' }
    ]

    let clickHandler = () => {}

    categories = shallow(
      <Categories
        categories={categoriesData}
        onClickHandler={clickHandler} />
    )
  })

  it('renders a div tag', () => {
    expect(categories.find('div').length).toEqual(1)
  })

  it('renders the appropriate number of <Category /> components', () => {
    expect(categories.find(Category).length).toEqual(2)
  })
})
