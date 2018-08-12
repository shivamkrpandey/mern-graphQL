import {gql} from 'apollo-boost';

const addBookQuery = gql`
{
    authors{
        name
        id
    }
}
`

const allBookQuery = gql`
{
    books{
        name
        id
    }
}
`

const addBookMutation = gql`
mutation ($name:String!, $genre:String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
        name
        id
    }
}
`

const getBookDetails = gql`
query($id: ID!){
    book(id: $id){
        name
        id
        genre
        author{
            name
            id
            age
            books{
                name
                id
            }
        }
    }
}
`

export {addBookQuery, allBookQuery, addBookMutation, getBookDetails};

