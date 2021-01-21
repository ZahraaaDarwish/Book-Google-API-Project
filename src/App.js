import './App.css';
import { useState } from 'react';
import Search from './Components/Search';
import Book from './Components/Book';
// import styled from "@emotion/styled";
import axios from 'axios';



function App() {

  //console.log('app file');
  // console.log('now created two accounts on github desktop');
  // console.log('next trial: forked for my own purposes');

  const [bookResult, setBookResult] = useState([]);
  const apiKey = "AIzaSyDA1X_brJRtwJTAiNsl3zY567x3E_SzRes";

  function getResultOnChange(searchBook) {
    // event.preventDefault();
    // console.log('handleSubmit app', searchBook);

    axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchBook+"&key="+apiKey+"&maxResults=40")
    .then(data => {
      // console.log(data.data.items);
      if(data.data.items){
        setBookResult(data.data.items);
      }else{
        setBookResult([]);
      }
      });
  }


  return (
    <div className="container">
      <h1 style={{color: "#26385a", margin: "0.2em"}}>Book Search Application</h1>
      <Search onSubmit={getResultOnChange}/>
      <Book books={bookResult}/>
    </div>
  );
}

export default App;
