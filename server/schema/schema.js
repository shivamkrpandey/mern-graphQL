const graphql = require('graphql');
const _=require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema,
    GraphQLInt, GraphQLID } = graphql;

var books = [
    {name: 'The Ramayan', genre: 'EpicOne', id: "1", authorId: 1},
    {name: 'Mahabharta', genre: 'EpicTwo', id: "2", authorId: 2},
    {name: 'Samved', genre: 'EpicThree', id: "3", authorId: 3},
]

var authors = [
    {name: 'Balmiki', age: 100, id: 1},
    {name: 'Vyasa', age: 200, id: 2},
    {name: 'Brahma', age: 300, id: 3},
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, {id: parent.authorId});
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(books, {id: args.id});
            },
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(authors, {id: args.id});
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});