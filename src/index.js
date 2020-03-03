import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlip from 'react-card-flip';
import App from './components/app';

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return <div>Hi</div>;
};

ReactDOM.render(
  <App />, 
  document.querySelector('.app-wrapper')
);