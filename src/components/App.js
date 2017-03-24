import React, { Component } from 'react'
import Categories from './Categories'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
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
    console.log(event.target)
  }

  render() {
    let result
    if (this.state.categories.length > 0) {
      result = (
        <Categories
          categories={this.state.categories}
          onClickHandler={this.onCategoryClick} />
      )
    } else {
      result = "Loading..."
    }

    return (
      <div className="App">
        {result}
      </div>
    )
  }
}

export default App
