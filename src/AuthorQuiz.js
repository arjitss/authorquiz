import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import {Link} from 'react-router-dom';

function Hero () {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book Written by Author</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer" className="row">
      <div>
        <p className="text-muted credits">All images are from <a href="#">Wikipedia Commons</a> and are in public domain</p>
      </div>
    </div>
  )
}
function Book(props) {
 return( 
  <div className="answer" onClick={props.onClick}>
    <h4>{props.title}</h4>
  </div>
  )
}

function Turn({author, books, highlight, onAnswerSelected}) {
  const HighLight = (highlight) => {
    const highlightbk = {
      'none':'',
      'wrong': 'red',
      'right':'green'
    }
    return highlightbk[highlight];
  }
  return (
    <div className="row turn" style={{backgroundColor:HighLight(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageurl} className="authorimage" alt={author.name}></img>
      </div>
      <div>
          {
            books.map((title)=>{
                return <Book title={title} key={title} onClick={() => onAnswerSelected(title)}/>
              }
            )
          }
      </div>
    </div>
  )
}

// Checkking Datatype of props supplied for Turn Function Component
Turn.prototype = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func,
  highlight: PropTypes.string.isRequired
}
function Continue(props) {
  return <div>
    {props.onShow ? <div className="col-11">
      <button type="button" className="continue btn btn-primary btn-lg float-right" onClick={props.onContinue}>Continue</button>
    </div> : null}
    </div>
}

function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}) {
  console.log(turnData);
  return (
    <div className="container-fuild">
    <Hero />
    <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
    <Continue onShow={highlight === 'right'} onContinue={onContinue}/>
    <div><Link to="/add"> Add an autthor</Link></div>
    <Footer />
    </div>
  );
}

export default AuthorQuiz;
