import React from 'react'
import { shallow } from 'enzyme'
import Category from '../../components/Category'

describe('<Category />', () => {
  let category, clickHandler

  beforeEach(() => {
    clickHandler = () => {}

    category = shallow(
      <Category
        categoryId="category-66"
        name="3D Printer Tips"
        onClickHandler={clickHandler} />
    )
  })

  it('renders a div tag', () => {
    expect(category.find('div').length).toEqual(1)
  })

  it('sets the data-id property to the categoryId', () => {
    let dataId = category.find('div').props()['data-id']
    expect(dataId).toEqual('category-66')
  })

  it('displays the name of the category', () => {
    expect(category.text()).toEqual('3D Printer Tips')
  })

  it('sets the onClickHandler property', () => {
    let onClick = category.find('div').props().onClick
    expect(onClick).toEqual(clickHandler)
  })
})
