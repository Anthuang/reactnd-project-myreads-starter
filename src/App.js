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
    let books = this.state.books
    BooksAPI.update(book, shelf).then((res) => {
      if (books.indexOf(book) === -1) {
        book.shelf = shelf
        books.push(book)
      } else {
        books[books.indexOf(book)].shelf = shelf
      }
      this.setState({
        books: books
      })
    })
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
            <Search updateBook={ this.updateBook.bind(this) }/>
          )}/>
          <Route exact path="/" render={() => (
            <BookShelf books={ this.state.books } updateBook={ this.updateBook.bind(this) }/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
