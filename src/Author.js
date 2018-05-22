import React from 'react';
import './Author.css'

const Author = (props) => {
  const {authorImg, authorName, authorTime} = props;
  return (
<div className='author-info'>
  <img src={authorImg} className='author-image' />
  <div className='author-text'>
    <h4>{authorName}</h4>
    <h4>{authorTime} read</h4>
  </div>
</div>
  )
}

export default Author;