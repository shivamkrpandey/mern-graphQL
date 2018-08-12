import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import { getBookDetails } from '../queries/queries';

class BookDetails extends Component {

    bookDetails() {
        let {book} = this.props.data;
        if(book) {
            return (
                 <div>
                     <h2>{book.name}</h2>
                     <p>{book.genre}</p>
                     <p>{book.author.name}</p>
                     <p>{book.author.age}</p>
                     <p>Some other books: </p>
                     <ul className="all-books">
                        {
                           book.author.books.map(otherBook=>{
                              return <li key={otherBook.id}> {otherBook.name}</li>
                           })
                        }
                     </ul>
                    </div>
            )

        } else {
            return (
                <div> No books selected</div>
            );
        }
    }
    render() {
        return (
            <div id="book-details">
                {this.bookDetails()}
            </div>
        );
    }
}

export default graphql(getBookDetails, {
    options: (props) => {
        return {
            variables: {
            id: props.bookId
        }
    }
    }
}
)(BookDetails);