import React from 'react';
import Image from './Image';
// import styled, { css } from 'styled-components';

function Book(props: any){

 
const booksArray = props.books; 
return (
    booksArray.map(((singlebook: any) => {
    return <Image data={singlebook} key={singlebook.id}/>;
  }))
);
      
}

export default Book;