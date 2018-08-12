import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

class App extends Component {
    render() {
        return (
        <ApolloProvider client={client}>
            <div id="main">
            <h1>My Books Library</h1>
                <BookList/>
            </div>
            <AddBook />
        </ApolloProvider>
        );
    }
}

export default App;
