import React from 'react'
import { shallow } from 'enzyme'
import Link from '../../components/Link'

describe('<Link />', () => {
  let link

  beforeEach(() => {
    link = shallow(
      <Link
        title="Google"
        url="https://google.com/"
        description="A search engine." />
    )
  })

  it('renders an anchor tag', () => {
    expect(link.find('a').length).toEqual(1)
  })

  it('sets the href property', () => {
    let href = link.find('a').props().href
    expect(href).toEqual('https://google.com/')
  })

  it('displays the title of the link', () => {
    expect(link.text()).toMatch('Google')
  })

  it('renders the description in a paragraph tag', () => {
    let p = link.find('p')
    expect(p.text()).toEqual("A search engine.")
  })
})
