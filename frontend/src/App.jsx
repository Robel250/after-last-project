



import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/ListBooks';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login />} />
         <Route path='/signup' element={<SignUp/>} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/workouts/create' element={<CreateBooks />} /> */}
        <Route path='/books/details/:id' element={<ShowBook />} />
        
        <Route path='/workouts/delete/:id' element={<DeleteBook />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;





