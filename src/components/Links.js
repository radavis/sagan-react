import React, { Component } from 'react'
import Link from './Link'
import LinkForm from './LinkForm'

class Links extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryId: props.categoryId || 1,
      links: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/categories/${this.state.categoryId}/links`)
    .then((response) => response.json())
    .then((json) => {
      this.setState({ links: json })
    })
  }

  render() {
    let result = ""

    if (this.state.links.length > 0) {
      result = this.state.links.map((link) => (
        <Link
          key={`link-${link.id}`}
          title={link.title}
          url={link.url}
          description={link.description} />
      ))
    }

    return (
      <div>
        {result}
        <LinkForm categoryId={this.state.categoryId} />
      </div>
    )
  }
}

export default Links
