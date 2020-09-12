import React, { useState } from 'react';
import './AddAuthorForm.css';

const AddAuthor = (props) => {
    const [getUrl, setUrl] = useState('dummyURL');
    const [getName, setName] = useState('FirstName LastName');
    const [getBookList, setBookList] = useState(['a','b']);
    const [getNewBook, setNewBook] = useState('');
    const onImageURLChange = (event) => {
        setUrl(event.target.value);
    }
    // const onAddingAuthor = (getUrl, getName) =>{
    //     console.log(getUrl, getName);
    // }
    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(props);
        const author = {
            name: getName,
            imageurl: getUrl,
            books: getBookList
        }
        props.onAddingAuthor(author);
        //props.onAddingAuthor();
    }
    const onHandleAddBook = (event) =>{
        setNewBook(event.target.value);
        //getBookList.push(getNewBook)
        //setBookList(getBookList);
        //console.log(getBookList);
    }
    const onHandleSubmitAddBook = (event) => {
        if(!getBookList.find((book) => book === getNewBook))
            getBookList.push(getNewBook)
        else
            console.log('Already Present');
        setBookList(getBookList);
        setNewBook('');
    }
    return (
        <div className="AddAuthorForm">
            <h1>Add Author</h1>
            <form onSubmit={onHandleSubmit}>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name </label>
                    <input type="text" value={getName} onChange={onNameChange}
                        className="form-control" name="name" id="" aria-describedby="helpId" placeholder=""/>
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="image">Image URL </label>
                    <input type="text" value={getUrl} onChange={onImageURLChange}
                        className="form-control" name="image" id="" aria-describedby="helpId" placeholder=""/>
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>
                <div>
                    Books Written
                    {getBookList.map((book) => {return <p key={book}>{book}</p>})}
                    <label htmlFor="newBooks">New Additions </label>
                    <input type="text" name="newBooks" value={getNewBook} onChange={onHandleAddBook}></input>
                    <a name="newBooks" id="newBooks" className="btn btn-primary" href="#" role="button" onClick={onHandleSubmitAddBook}>+</a>
                </div>
                
                <div>
                    <input name="Add" id="" className="btn btn-primary" type="submit" value="Add" />
                </div>
            </form>
        </div>

    )
  }

export default AddAuthor;