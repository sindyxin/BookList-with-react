import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({
  books: BooksReducer, //books is global application state called books where the key is books, and th value is whatever gets returned from reducer_books wich in this case is our array of books
  activeBook: ActiveBook
});
export default rootReducer;