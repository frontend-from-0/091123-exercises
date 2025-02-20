import React from 'react';

export const Exercise6 = () => {

  const clickHandler = (e) => {
    e.preventDefault(); 
  };

  return (
    <>
    <a href="#" onClick={clickHandler}>
      Click me
    </a>
    </>
  );
};