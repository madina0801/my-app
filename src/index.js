import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentTime = new Date(2022, 1, 1, 10).getHours();
console.log(currentTime);

let greeting;

const customStyle = {
  color: "red"
}

if(currentTime < 12) {
  greeting = "Good Morning!"
} else if(currentTime < 18) {
  greeting = "Good Afternoon!";
  customStyle.color = "green";
} else {
  greeting = "Good Night!";
  customStyle.color = "blue";
}


root.render(<h1 style={customStyle}  className="heading">{greeting}</h1>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();