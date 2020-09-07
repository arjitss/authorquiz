import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

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
  <div className="answer">
    <h4>{props.title}</h4>
  </div>
  )
}

function Turn({author, books}) {
  return (
    <div className="row turn" style={{backgroundColor:"white"}}>
      <div className="col-4 offset-1">
        <img src={author.imageurl} className="authorimage" alt="Author"></img>
      </div>
      <div>
          {
            books.map((title)=>{
                return <Book title={title} key={title} />
              }
            )
          }
      </div>
    </div>
  )
}
function Continue() {
  return <div/>
}

function AuthorQuiz({turnData}) {
  console.log(turnData);
  return (
    <div className="container-fuild">
    <Hero />
    <Turn {...turnData}/>
    <Continue />
    <Footer />
    </div>
  );
}

export default AuthorQuiz;
