import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';


const authors = [
  {
    name: 'Mark Twain',
    imageurl: 'images/authors/marktwain.jpg',
    books:['The Adventures of Huckleberry Finn',
            'Some Sample Data 1',
            'Some Sample Data 2']
  }
];

const state1 = {
    turnData: {
    author: authors[0],
    books: authors[0].books
  }
}
test('renders learn react link', () => {
  const { getByText } = render(<AuthorQuiz {...state1} />);
  const linkElement = getByText(/Author Quiz/i);
  expect(linkElement).toBeInTheDocument();
});

test('render the DOM', () => {
  const div = document.createElement("div");
  ReactDOM.render(<AuthorQuiz {...state1}/>, div);
})  
