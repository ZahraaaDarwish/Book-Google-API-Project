import React from 'react';
import SearchStyled from "../css/Search.style";


function Search(props: any) {
  // console.log('search fiile');
  function handleSubmit (event: any) {
    event.preventDefault();
    const bookInput = event.target[0].value;
    // console.log('bookInput :: ', bookInput);
    props.onSubmit(bookInput);
  }



  return (
    <SearchStyled>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control mt-10 input-search-books" placeholder="Search for Books" autoComplete="off"/>
          </div>
          <button type="submit" className="btn btn-danger btn-search-books">Search</button>
        </form>
    </SearchStyled>
  );

};

export default Search;
