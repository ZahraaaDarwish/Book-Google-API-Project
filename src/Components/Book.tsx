import React from 'react';
import Image from './Image';

function Book(props: any){

 
const booksArray = props.books; 
return (
    booksArray.map(((singlebook: any) => {
    return <Image data={singlebook} key={singlebook.id}/>;
  }))
);
      
}

export default Book;