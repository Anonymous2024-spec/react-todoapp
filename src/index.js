import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList'
import Correction from './Correction';

function App(){
  return(
    <>
  <Correction/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
