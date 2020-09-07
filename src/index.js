import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import {shuffle, sample} from 'underscore';
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

const state1 = {
  // Turn Data is for Randomly providing the data to users to play game
    turnData: getTurnData(authors)
}

ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz {...state1}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
