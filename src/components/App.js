import React, { Component } from 'react'
import Categories from './Categories'
import Links from './Links'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      selectedCategoryId: null
    }

    this.onCategoryClick = this.onCategoryClick.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/categories`)
    .then((response) => response.json())
    .then((json) => {
      this.setState({ categories: json })
    })
  }

  onCategoryClick(event) {
    this.setState({ selectedCategoryId: event.target.dataset.id })
    console.log(`selectedCategoryId: ${event.target.dataset.id}`)
  }

  render() {
    return (
      <div className="App">
        <Categories
          categories={this.state.categories}
          onClickHandler={this.onCategoryClick} />
        <Links categoryId={this.state.selectedCategoryId} />
      </div>
    )
  }
}

export default App
