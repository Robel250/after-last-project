// import { Router } from 'express'
// import React from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
// import Home from './pages/Home'
// function App() {
//   return (
//     <BrowserRouter>
//       <Router>
//         <Route path='/' element={<Home/>}/>
//       </Router>
//     </BrowserRouter>
//   )
// }

// export default App












// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import CreateBooks from './pages/ListBooks'
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/books/create' element={<CreateBooks />} />
   

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;








import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/ListBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
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
        <Route path='/books/create' element={<CreateBooks />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;





