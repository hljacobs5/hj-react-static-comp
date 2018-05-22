import React from 'react';
import './Author.css'

const Author = (props) => {
  return (
<div className='story-author-info'>
  <img src={props.author.authImg} className='story-author-image' />
  <div className='story-author-text'>
    <h4>{props.author.authName}</h4>
    <h4>{props.author.estTime} read</h4>
  </div>
</div>
  )
}

export default Author;