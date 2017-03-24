import React, { Component } from 'react'
import TextField from './TextField'

class LinkForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      url: '',
      description: '',
      category_id: this.props.categoryId
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("Form was submitted!")
    console.log(this.state)

    fetch('/api/v1/links', {
      method: 'POST',
      body: JSON.stringify(this.state)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New Link</h2>

        <TextField id="title"
          label="Title"
          name="title"
          value={this.state.title}
          handler={this.handleChange} />

        <TextField id="url"
          label="URL"
          name="url"
          value={this.state.url}
          handler={this.handleChange} />

        <TextField id="description"
          label="Description"
          name="description"
          value={this.state.description}
          handler={this.handleChange} />

        <input type="submit" className="button" value="Submit" />
      </form>
    )
  }
}

export default LinkForm
