import React from 'react';
import Button from './Button';
import Author from './Author';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.story.img} />
      <div className='story-info'>
        <div>
          <h3>{props.story.title}</h3>
          <p>{props.story.desc}</p>
        </div>
        <Author authorImg={props.story.img}
        authorName={props.story.authName}
        authorTime={props.story.estTime}/>
        {/* create an Author component and add it here */}
        {/* it will need properties of the author image, name, and the estimated reading time of the story */}
      </div>
    </div>
  )
}

export default Story;
