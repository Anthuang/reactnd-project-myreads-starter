import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then((res) => console.log(res))
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
            <Search/>
          )}/>
          <Route exact path="/" render={() => (
            <BookShelf books={ this.state.books } onUpdate={ this.updateBook }/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
