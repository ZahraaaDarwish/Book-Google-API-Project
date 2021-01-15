import React from 'react';

function Search(props) {
  // console.log('search fiile');
  function handleSubmit (event) {
    event.preventDefault();
    const bookInput = event.target[0].value;
    // console.log('bookInput :: ', bookInput);
    props.onSubmit(bookInput);
  }

  return (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control mt-10" placeholder="Search for Books" autoComplete="off"/>
          </div>
          <button type="submit" className="btn btn-danger">Search</button>
        </form>
  );

};

export default Search;
