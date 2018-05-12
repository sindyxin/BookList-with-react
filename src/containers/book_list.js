import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    //combine our react views and connecting two seperate redux and react libraries
    return this.props.books.map((book)=>{
      return (
        // don't forget add key because it is list need unique value for key
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  render(){
    return(
      //renderList is helper function
      <ul className="list-group col-sm-4">
        <li>{ this.renderList() }</li>  
      </ul>
    )
  }
};
function mapStateToProps(state){
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}
const mapStateToProps = state => {
  return {
    todo : state.todos[0]
  }
}

export default BookList