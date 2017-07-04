import React from 'react'

class Book extends React.Component {
  state = {
    option: ""
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    const book = this.props.book

    return (
      <div className="book" key={ book.id }>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })`}}></div>
          <div className="book-shelf-changer">
            <select defaultValue={ book.shelf } onChange={ this.handleChange }>
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
