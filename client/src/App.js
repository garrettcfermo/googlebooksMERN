import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import List from './components/List'
import axios from 'axios'


class App extends Component {

  state = {
    text: '',
    book: null,
    favorites: []
  }

  handleBookInput = event => {
    this.setState({ text: event.target.value })
  }

  handeleFormSubmit = event => {
    event.preventDefault()
    console.log(this.state.text)
    axios.get(` https://www.googleapis.com/books/v1/volumes?q=${this.state.text}&key=AIzaSyD73crY1q6ynPGIJ1texTnAXh60C7CtZE8`)
      .then(r => {
        this.setState({
          book: {
            id: r.data.items[0].id,
            title: r.data.items[0].volumeInfo.title,
            authors: r.data.items[0].volumeInfo.authors,
            description: r.data.items[0].volumeInfo.description,
            image: r.data.items[0].volumeInfo.imageLinks.thumbnail,
            link: r.data.items[0].volumeInfo.canonicalVolumeLink,
            publishedDate: r.data.items[0].volumeInfo.publishedDate
          }
        })
        console.log(this.state.book)
      })
  }


  removeBook = () => {
    this.setState({ book: null, text: '' })
  }


  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar handleFormSubmit={this.handeleFormSubmit} text={this.state.text} handleBookInput={this.handleBookInput} />
            <Route exact path='/' component={() => <Home book={this.state.book} removeBook={this.removeBook} />} />
            <Route exact path='/list' component={() => <List />} />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
