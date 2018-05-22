import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <a href='sldjf'>Write a story</a>
      <h3>{props.headerTitle}</h3>
      <a href = 'sdf'>Sign in/Sign up</a>
    </div>
  )
}

export default Header;
