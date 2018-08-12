import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import { allBookQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    displayAllBooks() {
        var data = this.props.data;

        if(data.loading) {
            return(
                <div>
                    <h1>Books are loading...</h1>
                </div>
            ); 
        } else {

        return data.books.map(book => {
            return(
                    <li key= {book.id} id={book.id} onClick={
                        (e) => this.setState({selected: book.id})
                    }>{book.name}</li>
            );
        });
    }
    }
    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayAllBooks()}
                </ul>
                <BookDetails bookId={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(allBookQuery)(BookList);
