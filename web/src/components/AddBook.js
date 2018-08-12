import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import { addBookQuery, allBookQuery, addBookMutation } from '../queries/queries';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }
    displayAuthors() {
        let data = this.props.addBookQuery;
        if(data.loading) {
            return(
                <option disabled> Authors are loading...</option>
            )
        } else {
            return data.authors.map(author =>{
                return (
                <option key= {author.id} value={author.id}>{author.name}</option>
                );
            });
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{
                query: allBookQuery
            }]
        });
    }
    render() {
        return (
            <form id="add-book" onSubmit= {this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                 
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => {
                        this.setState({genre: e.target.value})}}>
                    </input>
                </div>

                <div className="field">
                    <label>Author name</label>
                    <select onChange={(e) => {
                        this.setState({authorId: e.target.value});
                    }}> Select authors
                        <option> Authors are...</option>
                        {this.displayAuthors()};
                    </select>
                </div>
                
                <button>+</button>
            </form>
        );
    } 
}

export default compose(
    graphql(addBookMutation, {name: "addBookMutation"}),
    graphql(addBookQuery, {name: "addBookQuery"})
)(AddBook);
