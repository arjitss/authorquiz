import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import {shuffle, sample} from 'underscore';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import AddAuthor from './AddAuthor';
import * as serviceWorker from './serviceWorker';

const authors = [
  {
    name: 'Mark Twain',
    imageurl: 'images/authors/marktwain.jpg',
    books:['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Sample 1',
    imageurl: 'images/authors/marktwain.jpg',
    books:['The book by Sample 1']
  },
  {
    name: 'Sample 2',
    imageurl: 'images/authors/marktwain.jpg',
    books:['The book by Sample 2']
  },
  {
    name: 'Sample 3',
    imageurl: 'images/authors/marktwain.jpg',
    books:['The book 1 by Sample 3', 'The book 2 by Sample 3', 'The book 3 by Sample 3']
  },
  {
    name: 'Sample 4',
    imageurl: 'images/authors/marktwain.jpg',
    books:['The book 1 by Sample 4', 'The book 2 by Sample 4']
  }
];
function getTurnData(authors) {
  const allBooks = authors.reduce((p,c,i) => {return p.concat(c.books)},[]);
  const fourRandomBooks = shuffle(allBooks).slice(0,3);
  const answer = sample(fourRandomBooks);
  console.log(answer);
  return {
    books: fourRandomBooks,
    author: authors.find((author) => {
      return author.books.some((title)=> title === answer)
    })
  }
}
function resetState (){
  state1 = {
    // Turn Data is for Randomly providing the data to users to play game
      turnData: getTurnData(authors),
      highlight: ''
  }
}
let state1 = {
  // Turn Data is for Randomly providing the data to users to play game
    turnData: getTurnData(authors),
    highlight: ''
}
const onAnswerSelected = (answer) => {
  console.log(answer, ' answer provided')
  const isCorrect = state1.turnData.author.books.some((book) => book === answer)
  state1.highlight = isCorrect ? 'right' : 'wrong';
  render();
}

const onContinue = () => {
  render();
  resetState();
}

function App() {
  return <AuthorQuiz {...state1} 
  onAnswerSelected={onAnswerSelected}
  onContinue={onContinue}
  />
}
const AddAuthorWrapper = withRouter(({history}) => {
  return <AddAuthor onAddingAuthor = { (author) => {
    console.log(author);
    authors.push(author);
    history.push('/');
    }
  } />
})
function render() {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path='/' component={App}/>
      <Route path='/add' component={AddAuthorWrapper}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
