/* import Home from './components/home';
import Log from './components/login';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/400.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Log/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App; */
  

// App.js
import React from 'react';
import { SlideProvider } from './components/slidecontext';
import HomePage from './components/home';

import '@fontsource/roboto/400.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <SlideProvider>
      <div>
        <HomePage />
      </div>
    </SlideProvider>
  );
};

export default App;
