import React, { Component } from 'react';
import Book from './book';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: props.list,
            date: new Date()
        };

        this.tick = this.tick.bind(this);

    }

    tick() {
        this.setState({date:new Date()})
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    render() {
        return (
            <div className="book-list">
                BookList. Today {this.state.date.toLocaleTimeString()}
                {
                    this.state.books.map((book) => {
                                return <Book key={book._id} name={book.name} />
                            })
                }
                <Book/>
            </div>
        );
    }
}

export default BookList;
