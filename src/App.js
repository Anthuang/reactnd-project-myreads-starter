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
    const findById = (ele) => ele.id === book.id
    let books = this.state.books
    BooksAPI.update(book, shelf).then((res) => {
      const target = books.find(findById)
      if (target) {
        target.shelf = shelf
      } else {
        book.shelf = shelf
        books.push(book)
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
            <Search books={ this.state.books } updateBook={ this.updateBook.bind(this) }/>
          )}/>
          <Route exact path="/" render={() => (
            <BookShelf books={ this.state.books } updateBook={ this.updateBook.bind(this) }/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
