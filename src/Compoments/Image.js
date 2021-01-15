import React from 'react';

function Image (props) {
    let singlebook = props.data;
    // console.log('singlebook', singlebook);

    let thumbnailPicture = singlebook.volumeInfo.imageLinks ? singlebook.volumeInfo.imageLinks.thumbnail : '';
    if(thumbnailPicture){
      return (
        <a href={singlebook.volumeInfo.previewLink} key={singlebook.id}>
          <img src={thumbnailPicture} alt={singlebook.title} />
        </a>
      );
    }else{
      return (
        <a href={singlebook.volumeInfo.previewLink} key={singlebook.id}>
          <img src={thumbnailPicture} alt={singlebook.title} />
        </a>
      );
    }
}

export default Image;