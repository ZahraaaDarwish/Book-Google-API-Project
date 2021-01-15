import React from 'react';
import Image from './Image';

function Book(props){
 
    console.log(props.books2);

    const booksArray = props.books; 
    
  
    return (

      booksArray.map(singlebook => {
        return <Image data={singlebook}/>;
      })
   
    );

 

}


  export default Book;