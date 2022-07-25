import React, { useState } from 'react';
import './wel.css';

const Welcome = ({ name, price }) => {
  const [namee, newName] = useState(name);
  const [pricee, newPrice] = useState(price);
  const clickHandler = () => {
    if (namee === name) {
      newName('updated');
    } else {
      newName(name);
    }
    newPrice('updated');
  };
  return (
    <>
      <div className="productName">
        <h1>{namee}</h1>
        <button>{pricee}</button>
        <button onClick={clickHandler}>change titl</button>
        <button onClick={clickHandler}>change price</button>
      </div>
    </>
  );
};

export default Welcome;
