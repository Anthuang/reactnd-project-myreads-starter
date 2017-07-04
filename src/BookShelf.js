import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import './App.css'

class BookShelf extends React.Component {
  shelves = ["currentlyReading", "wantToRead", "read"]

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map((shelf) => <Shelf books={ this.props.books } shelf={ shelf } key={ shelf }/>)}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf
