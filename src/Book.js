import React from 'react'

class Book extends React.Component {
  render() {
    const { book, updateBook } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })`}}></div>
          <div className="book-shelf-changer">
            <select defaultValue={ book.shelf } onChange={(event) => updateBook(book, event.target.value)}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ book.author }</div>
      </div>
    )
  }
}

export default Book