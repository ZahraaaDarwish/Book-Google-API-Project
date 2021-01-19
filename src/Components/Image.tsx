import React from 'react';
import ProfileStyled from "../css/Image.style";

function Image (props: any) {

    let singlebook = props.data;
    // console.log('singlebook', singlebook);

    let thumbnailPicture = singlebook.volumeInfo.imageLinks ? singlebook.volumeInfo.imageLinks.thumbnail : '';
    if(thumbnailPicture){
      return (
        <ProfileStyled>
          <a href={singlebook.volumeInfo.previewLink} key={singlebook.id}>
            <img className="mystyle" src={thumbnailPicture} alt={singlebook.title} />
          </a>
        </ProfileStyled>
      );
    }else{
      return (
          <a href={singlebook.volumeInfo.previewLink} key={singlebook.id}>
            <img className="mystyle" src={thumbnailPicture} alt={singlebook.title} />
          </a>
      );
    }
}

export default Image;