import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { iteratee, object } from 'underscore';

// Configure Adapter
Enzyme.configure({adapter: new Adapter()});


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
  },
  highlight: 'none'
}
// test('renders learn react link', () => {
//   const { getByText } = render(<AuthorQuiz {...state1} />);
//   const linkElement = getByText(/Author Quiz/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Author Quiz', () => {
  test('render the DOM', () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state1} onAnswerSelected={()=>{}}/>, div);
  });

  describe('When no answer is selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state1} onAnswerSelected={()=>{}}/>)
     //wrapper = mount(<AuthorQuiz {...Object.assign({}, state, {highlight:''})} onAnswerSelected={()=>{}}/>)
    });
    it('should have no background color', () => {
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('');
    });
    it('should have red background color', () => {
      wrapper = mount(<AuthorQuiz {...(Object.assign({}, state1,{highlight:'wrong'}))} onAnswerSelected={()=>{}}/>)
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('red');
    });

    describe('When user clicks an answer', () => {
      const handleAnswerClicked = jest.fn();
      wrapper = mount(<AuthorQuiz {...state1} onAnswerSelected={handleAnswerClicked}/>)
      wrapper.find('.answer').first().simulate('click');      
      it('onAnswerSelected to be called', ()=>{
          expect(handleAnswerClicked).toHaveBeenCalled();
      });
      it('onAnswerSelected return value - The Adventures of Huckleberry Finn ', ()=>{
          expect(handleAnswerClicked).toHaveBeenCalledWith('The Adventures of Huckleberry Finn');
      })      
    })
  })
  
});
