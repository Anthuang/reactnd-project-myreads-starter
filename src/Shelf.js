import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
  render() {
    const { updateBook, shelf } = this.props
    return (
      <div>
        <h2 className="bookshelf-books">{ shelf.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book) => book.shelf === shelf).map((book) => (
              <li key={ book.id }>
                <Book book={ book } updateBook={ updateBook }/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
