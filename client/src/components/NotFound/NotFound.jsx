import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h1 style={{ fontSize: "5em" }}>404</h1>
        <Link to={'/'}>Return to home</Link>
        <p style={{ fontSize: "2em" }}>Oops! Page not found</p>
        <img
          src="https://media.giphy.com/media/fGJy4E4yFb8A4/giphy.gif"
          alt="Page not found"
          style={{ maxWidth: "100%" }}
        />
      </div>
    );
  };
  
  export default NotFound;