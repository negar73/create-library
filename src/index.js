import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import './index.css';
import './App.css'
import App from './App'
import Books from "./Components/Books"

import About from "./Components/About"
import Book from "./Components/Book"
import NotFound from './Components/NotFound';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/books" element={<Books/>}>
      <Route path=":bookId" element={<Book/>}></Route></Route>
      <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
