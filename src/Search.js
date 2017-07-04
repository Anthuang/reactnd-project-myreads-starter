import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class Search extends React.Component {
  state = {
    books: [],
    query: ''
  }

  updateQuery(query) {
    BooksAPI.search(query, 20).then((books) => this.setState({ books }))
    this.setState({
      query: query
    })
  }

  showBooks(books) {
    if (books && books.length) {
      return books.map((book) => (
        <Book book={ book } updateBook={ this.props.updateBook } key={ book.id }/>
      ))
    }
  }

  render() {
    const { books } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              value={ this.state.query }
              onChange={(event) => this.updateQuery(event.target.value)}
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.showBooks(books) }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
