import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreator } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        // console.log(this.props.asdf) //=> '123'
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inside of booklist
    return {
        // asdf: '123'
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the bookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreator({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);