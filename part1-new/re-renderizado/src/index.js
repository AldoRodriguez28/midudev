import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let counter = 1
// const refresh = (root) => {
//   root.render(<App counter={counter} />, 
//   document.getElementById('root'))
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
// setInterval(() => {
//   refresh(root)
//   counter += 1
// }, 1000)
 root.render(
   <App counter={counter} />, 
   document.getElementById('root')
 )

